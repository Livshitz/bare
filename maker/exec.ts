#!/usr/bin/env node
import { spawn } from 'child_process';
import { join, isAbsolute } from 'path';
import { promisify } from 'util';
import { pipeline } from 'stream';
import { createInterface } from 'readline';
import { existsSync } from 'fs';
import { access } from 'fs/promises';

export interface RunResult {
	stdout: string;
	stderr: string;
	exitCode: number;
}

export interface RunOptions {
	cwd?: string;
	env?: Record<string, string>;
	stdin?: string | Uint8Array;
	throwOnError?: boolean; // default true
	base?: string; // new option
}

/**
 * Check if a command is a shell command (absolute path, relative path, or in PATH)
 */
async function resolveCommand(cmd: string, base: string): Promise<string> {
	if (isAbsolute(cmd) || cmd.startsWith('./') || cmd.startsWith('../')) {
		return cmd;
	}

	// Try to find in PATH
	try {
		const whichProc = spawn('which', [cmd]);
		let output = '';
		for await (const chunk of whichProc.stdout) {
			output += chunk.toString();
		}
		const exitCode = await new Promise<number>((resolve) => whichProc.on('close', resolve));
		if (exitCode === 0 && output.trim()) {
			return cmd; // found in PATH
		}
	} catch {
		// ignore errors
	}

	// Check if command exists as a file in base directory
	const candidate1 = join(base, cmd);
	const candidate2 = join(base, `${cmd}.ts`);
	if (existsSync(candidate1)) {
		return candidate1;
	}
	if (existsSync(candidate2)) {
		return candidate2;
	}

	// Otherwise, return original command
	return cmd;
}

/**
 * Execute a shell command or another script.
 */
export async function exec(
	cmd: string | string[],
	options: RunOptions = {}
): Promise<RunResult> {
	const {
		cwd,
		env,
		stdin,
		throwOnError = true,
		base = 'body/',
	} = options;

	let cmdArray = typeof cmd === 'string' ? cmd.split(' ') : cmd.slice();

	if (cmdArray.length > 0) {
		const resolved = await resolveCommand(cmdArray[0], base);

		// If resolved command is a local .ts or .js file inside body/, use bun run
		if (
			(resolved.startsWith(base) || resolved.startsWith(`./${base}`)) &&
			(resolved.endsWith('.ts') || resolved.endsWith('.js'))
		) {
			cmdArray = ['bun', 'run', resolved, ...cmdArray.slice(1)];
		} else {
			cmdArray[0] = resolved;
		}
	}

	return new Promise<RunResult>((resolvePromise, rejectPromise) => {
		const proc = spawn(cmdArray[0], cmdArray.slice(1), {
			cwd,
			env: env ? { ...process.env, ...env } : process.env,
			stdio: ['pipe', 'pipe', 'pipe'],
		});

		let stdoutBuf = '';
		let stderrBuf = '';

		proc.stdout.on('data', (chunk) => {
			stdoutBuf += chunk.toString();
		});
		proc.stderr.on('data', (chunk) => {
			stderrBuf += chunk.toString();
		});

		proc.on('error', (err) => {
			rejectPromise(err);
		});

		proc.on('close', (exitCode) => {
			if (throwOnError && exitCode !== 0) {
				rejectPromise(
					new Error(
						`Command failed with exit code ${exitCode}\nSTDOUT:\n${stdoutBuf}\nSTDERR:\n${stderrBuf}`
					)
				);
			} else {
				resolvePromise({
					stdout: stdoutBuf,
					stderr: stderrBuf,
					exitCode,
				});
			}
		});

		if (stdin) {
			if (typeof stdin === 'string') {
				proc.stdin.write(stdin);
			} else {
				proc.stdin.write(stdin);
			}
			proc.stdin.end();
		} else {
			proc.stdin.end();
		}
	});
}

// CLI support
if (require.main === module) {
	const args = process.argv.slice(2);
	if (args.length === 0) {
		console.error('Usage: exec.ts <command> [args...]');
		process.exit(1);
	}

	exec(args.join(' '), { throwOnError: false })
		.then((result) => {
			if (result.stdout) process.stdout.write(result.stdout);
			if (result.stderr) process.stderr.write(result.stderr);
			process.exit(result.exitCode);
		})
		.catch((err) => {
			console.error(err.message || err);
			process.exit(1);
		});
}