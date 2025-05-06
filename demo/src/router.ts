import { createRouter, createWebHistory } from 'vue-router';
import AtomsDemo from './views/AtomsDemo.vue';
import PatternsDemo from './views/PatternsDemo.vue';
import Test from './views/Test.vue';
import PrimitivesDemo from './views/PrimitivesDemo.vue';
import IconsDemo from './views/IconsDemo.vue';

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
			meta: { isWide: true },
		},
		{
			path: '/demo/test',
			name: 'test',
			component: Test,
			meta: { hideHeader: true, isWide: true },

		},
		{
			path: '/demo/primitives',
			name: 'primitives-demo',
			component: PrimitivesDemo,
		},
		{
			path: '/demo/icons',
			name: 'icons-demo',
			component: IconsDemo,
		},
		{
			path: '/',
			redirect: '/demo/atoms',
		},
	],
});

export default router;
