import { ref, computed, onMounted, onUnmounted } from 'vue';

export const breakpoints = {
	xs: 0,
	sm: 480,
	md: 640,
	lg: 768,
	xl: 1024,
};

const getBreakpoint = (width: number) => {
	if (width < breakpoints.sm) return 'xs';
	if (width < breakpoints.md) return 'sm';
	if (width < breakpoints.lg) return 'md';
	if (width < breakpoints.xl) return 'lg';
	return 'xl';
};

class Breakpoints {
	screenW = ref(typeof window !== 'undefined' ? window.innerWidth : 0);
	screenH = ref(typeof window !== 'undefined' ? window.innerHeight : 0);

	breakpoints = breakpoints;

	private update = () => {
		this.screenW.value = window.innerWidth;
		this.screenH.value = window.innerHeight;
	};

	constructor() {
		// console.log('Breakpoints:ctor');
		window.addEventListener('resize', this.update);
		this.update();
		// onMounted(() => {
		// 	window.addEventListener('resize', this.update);
		// 	this.update();
		// });
		// onUnmounted(() => {
		// 	window.removeEventListener('resize', this.update);
		// });
	}

	current = computed(() => getBreakpoint(this.screenW.value));

	isXS = computed(() => this.current.value === 'xs');
	isSM = computed(() => this.current.value === 'sm');
	isMD = computed(() => this.current.value === 'md');
	isLG = computed(() => this.current.value === 'lg');
	isXL = computed(() => this.current.value === 'xl');

	isLtXS = computed(() => this.screenW.value < breakpoints.sm);
	isLtSM = computed(() => this.screenW.value < breakpoints.md);
	isLtMD = computed(() => this.screenW.value < breakpoints.lg);
	isLtLG = computed(() => this.screenW.value < breakpoints.xl);

	isGtXS = computed(() => this.screenW.value >= breakpoints.sm);
	isGtSM = computed(() => this.screenW.value >= breakpoints.md);
	isGtMD = computed(() => this.screenW.value >= breakpoints.lg);
	isGtLG = computed(() => this.screenW.value >= breakpoints.xl);
}

export { Breakpoints }; 