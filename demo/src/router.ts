import { createRouter, createWebHistory } from 'vue-router';
import AtomsDemo from './views/AtomsDemo.vue';
import PatternsDemo from './views/PatternsDemo.vue';
import Test from './views/Test.vue';
import PrimitivesDemo from './views/PrimitivesDemo.vue';
import IconsDemo from './views/IconsDemo.vue';
import LoginView from './views/LoginView.vue';
import Signup from './views/SignupView.vue';

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
			path: '/demo/login',
			name: 'login-demo',
			component: LoginView,
			meta: { hideHeader: true },
		},
		{
			path: '/demo/signup',
			name: 'signup-demo',
			component: Signup,
			meta: { hideHeader: true },
		},
		{
			path: '/',
			redirect: '/demo/atoms',
		},
	],
});

export default router;
