import { createRouter, createWebHistory } from 'vue-router';
import AtomsDemo from './views/AtomsDemo.vue';
import PatternsDemo from './views/PatternsDemo.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/demo/atoms',
			name: 'atoms-demo',
			component: AtomsDemo,
		},
		{
			path: '/demo/patterns',
			name: 'patterns-demo',
			component: PatternsDemo,
		},
		{
			path: '/',
			redirect: '/demo/atoms',
		},
	],
});

export default router;
