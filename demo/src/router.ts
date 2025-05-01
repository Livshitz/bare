import { createRouter, createWebHistory } from 'vue-router';
import AtomsDemo from './AtomsDemo.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/demo',
			name: 'demo',
			component: AtomsDemo,
		},
		{
			path: '/',
			redirect: '/demo',
		},
	],
});

export default router;
