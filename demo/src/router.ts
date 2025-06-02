import { createRouter, createWebHistory } from 'vue-router';
import AtomsDemo from './views/AtomsDemo.vue';
import PatternsDemo from './views/PatternsDemo.vue';
import Test from './views/TestView.vue';
import PrimitivesDemo from './views/PrimitivesDemo.vue';
import IconsDemo from './views/IconsDemo.vue';
import LoginView from './views/LoginView.vue';
import Signup from './views/SignupView.vue';
import PaymentView from './views/PaymentView.vue';
import CalculatorView from './views/CalculatorView.vue';
import LivView from './views/LivView.vue';
import Liv2View from './views/Liv2View.vue';
import PlaygroundView from './views/PlaygroundView.vue';
import MakerView from './views/MakerView.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/demo/maker',
			name: 'Bare Maker',
			component: MakerView,
			meta: { hideHeader: true, isWide: true },
		},
		{
			path: '/demo/liv',
			name: 'Elya Livshitz',
			component: Liv2View,
			meta: { hideHeader: true, isWide: true },
		},
		{
			path: '/demo/playground',
			name: 'playground',
			component: PlaygroundView,
			meta: { hideHeader: true, isWide: true },
		},
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
			path: '/demo/payment',
			name: 'payment',
			component: PaymentView,
		},
		{
			path: '/demo/calculator',
			name: 'calculator',
			component: CalculatorView,
		},
		{
			path: '/',
			redirect: '/demo/atoms',
		},
	],
});

export default router;
