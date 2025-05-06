import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../../src/index.less';
// import './main.less';
import { Helpers } from './helpers';

const app = createApp(App);
app.use(router);

// Initialize Helper
const helpers = new Helpers(app, router);
app.helpers = helpers;

app.mount('#app');

export { app, helpers };


declare module 'vue' {
	interface App {
		helpers: Helpers;
	}
}