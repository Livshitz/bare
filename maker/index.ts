import { ask } from "./ask";
import fs from "fs";
import { libx } from "libx.js/build/bundles/node.essentials.js";

(async()=>{
	const args = libx.node.args._;
	const request = args.join(' ');
	if (request.length === 0) {
		console.error('Usage: maker <request>');
		return;
	}
	const file = './demo/src/views/PlaygroundView.vue';
	const context = fs.readFileSync(file, 'utf8');
	const res = await ask(request, context);

	fs.writeFileSync(file, res);
	console.log('done:', res);
})();