import { ref, watch } from 'vue';

export class DarkModeManager {
	public isDark = ref(localStorage.getItem('darkMode') === 'true' ||
		window.matchMedia('(prefers-color-scheme: dark)').matches);

	constructor() {
		this.setupDarkMode();
		this.isDark.value = localStorage.getItem('darkMode') === 'true';
	}

	private setupDarkMode() {
		watch(this.isDark, (newValue) => {
			if (newValue) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}, { immediate: true });
	}

	public toggleDarkMode() {
		this.isDark.value = !this.isDark.value;
		localStorage.setItem('darkMode', this.isDark.value.toString());
	}
} 