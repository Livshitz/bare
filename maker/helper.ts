import * as yaml from 'yaml';
import { readdir } from 'fs/promises';
import { exec, exec as execCore } from './exec';
import { libx } from 'libx.js/build/bundles/node.essentials';
import fs from 'fs';

// Helper class for common functions
class Helper {
	// Parse YAML block from LLM output
	public extractYaml(text: string): any {
		const unescaped = text
			.replace(/\\`/g, '`')         // turn \\` into `
			.replace(/\\n/g, '\n')          // turn \n into real newlines
			.replace(/\\"/g, '"');          // turn escaped quotes back to quotes

		const match = unescaped.match(/```yaml([\s\S]*?)```/);
		if (!match) throw new Error(`No YAML block found in LLM output. \nText: ${text}`);
		return yaml.parse(match[1]);
	}

	// Utility to list available actions in 'body/' folder
	public async listActions(): Promise<string[]> {
	  const files = await readdir('./body');
	  return files.filter(f => f.endsWith('.ts') || f.endsWith('.sh'));
	}
	
	// Generate prompt text including available actions and previous output
	public buildActionSelectionPrompt(actions: string[], prevOutput: string): string {
	  return `
		You are an AI agent that selects the next action to perform.
		
		Available actions:
		${actions.map(a => `- ${a}`).join('\n')}
		
		Previous output/context:
		${prevOutput}
		
		Respond ONLY with a YAML block specifying:
		\`\`\`yaml
		next_action:
		command: "<action filename>"
		params:
			- "<param1>"
			- "<param2>"
		message: "<reasoning>"
		\`\`\`
		`;
	}

	// Execute the chosen action command with params
	public async executeAction(commandFile: string, params: string[]) {
		const cmdPath = `body/${commandFile}`;
		const cmdStr = `bun ${cmdPath} ${params.join(' ')}`;
		console.log(`Executing: ${cmdStr}`);
		const { stdout } = await execCore(cmdStr);
		console.log(stdout);
		return stdout;
  	}
	
	// Check if the script is running as the main module
	public isMain(meta: ImportMeta): boolean {
		return meta?.main ?? import.meta.main;
	}

	// public async ask(input: string, modelOverride?: string) {
	// 	const { ask } = await import('../body/ask');
	// 	const res = await ask(input, null, modelOverride);
	// 	return res;
	// }

	public addLineNumbers(content: string): string {
		return content
		  .split('\n')
		  .map((line, idx) => `${idx + 1}:\t${line}`)
		  .join('\n');
	}

	public format(textTemplate: string, data: any) {
		return libx.extensions.string.format.call(textTemplate, data);
	}

	public getCurrentRunId() {
		const runId = fs.readFileSync('.tmp/current-run.txt', 'utf8').trim();
		return runId;
	}

	public getTimestamp(date: Date = new Date()) {
		return libx.extensions.date.format.call(new Date(), 'yymmdd_HHMMss');
	}
}

export const helper = new Helper();