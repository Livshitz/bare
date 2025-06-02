import { libx } from "libx.js/build/bundles/node.essentials";
import { AiModule } from "./AI";
import { helper } from "./helper";
import path from "path";
import fs from "fs";

const ai = new AiModule();

const bodPromptAsk = 'c3c104ef57cdcdf0790b69d69bdc2011';

const executePrompt = async (input: string, context?: string, config?: any) => {
	libx.log.d('execute prompt', { input, context });
	const res = await ai.runPrompt(bodPromptAsk, {
		context,
	}, [{
		role: "user", 
		content: `${input}`,
	}], {
		// model: "meta-llama/llama-4-scout-17b-16e-instruct",
		// provider: "groq",
		maxTokens: 8192,
		...config,
	});

	return res;
}

const saveAsk = async (question: string, answer: string) => {
	const timestamp = helper.getTimestamp();
	const runId = helper.getCurrentRunId();
	fs.writeFileSync(path.join(__dirname, `../desk/${runId}/${timestamp}-ask.md`), `<<<QUESTION>>>\n${question}\n-----\n<<<ANSWER>>>\n${answer}`);
}

export async function ask(question: string, context?: string, modelOverride?: string) {
	// libx.log.i(`Asking: "${question}"`);
	const config: any = {};
	if (modelOverride) {
		config.provider = modelOverride.substring(0, modelOverride.indexOf('/'));
		config.model = modelOverride.substring(modelOverride.indexOf('/') + 1);
	}
	const answer = await executePrompt(question, context, config);

	// await saveAsk(question, answer);

	if (helper.isMain(import.meta)) {
		console.log(answer);
	} 

	return answer;
}

if (helper.isMain(import.meta)) {
	ask(libx.node.args._.join(' '));
}