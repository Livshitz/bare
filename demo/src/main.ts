import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import '../../src/index.scss'; // Reverted import back to LESS
// import '../../src/index.less';
import '../../src/index.less';
// Remove specific CSS imports as they are handled by index.less
// import '../../src/atoms/row.css';
// import '../../src/atoms/col.css';
// import '../../src/atoms/grid.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
