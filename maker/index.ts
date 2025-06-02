import { ask } from "./ask";
import fs from "fs";

(async()=>{
	const context = fs.readFileSync('./demo/src/views/PlaygroundView.vue', 'utf8');
	const res = await ask("what is file about?", context);
	console.log(res);
})();