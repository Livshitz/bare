import { ref, watch } from 'vue';
import { createApp } from 'vue';
import { Router } from 'vue-router';
import { Breakpoints } from './Breakpoints';
import { DevtoolsHelper } from './DevtoolsHelper';

export class Helpers {
	public isDark = ref(localStorage.getItem('darkMode') === 'true' ||
		window.matchMedia('(prefers-color-scheme: dark)').matches)

	public breakpoints = new Breakpoints();

	constructor(private app: ReturnType<typeof createApp>, private router: Router) {
		this.setupDarkMode();
		new DevtoolsHelper(this.app, this.router);
	}

	private setupDarkMode() {
		watch(this.isDark, (newValue) => {
			if (newValue) {
				document.documentElement.classList.add('dark')
			} else {
				document.documentElement.classList.remove('dark')
			}
		}, { immediate: true })
	}

	public toggleDarkMode() {
		this.isDark.value = !this.isDark.value
		localStorage.setItem('darkMode', this.isDark.value.toString())
	}
} 