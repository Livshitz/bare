import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../../src/index.less';
import './main.less';
import { Helpers } from './helpers';

const app = createApp(App);
app.use(router);

// Initialize Helper
const helpers = new Helpers(app, router);
app.helpers = helpers;

// Make helpers and app available as $helpers and $app in all components
app.config.globalProperties.$helpers = helpers;
app.config.globalProperties.$app = app;

app.mount('#app');

export { app, helpers };


declare module 'vue' {
	interface App {
		helpers: Helpers;
	}
}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$helpers: Helpers;
		$app: typeof app;
	}
}