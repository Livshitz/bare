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

	public setThemeColor(newColorName: string, accentLight?: string, accentDark?: string) {
		const rootStyle = document.documentElement.style;
		const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900];
		
		shades.forEach(shade => {
			// Update light mode primary color shades
			// e.g., --primary-100 will be set to var(--color-blue-100) if newColorName is "blue"
			rootStyle.setProperty(`--primary-${shade}`, `var(--color-${newColorName}-${shade})`);
		
			// Update dark mode primary color shades
			// The dark mode shades are inverted as per your variables.less
			// e.g., --primary-100-dark will be set to var(--color-blue-900)
			//       --primary-900-dark will be set to var(--color-blue-100)
			const darkEquivalentShade = 1000 - shade;
			rootStyle.setProperty(`--primary-${shade}-dark`, `var(--color-${newColorName}-${darkEquivalentShade})`);
		});

		if (accentLight) {
			rootStyle.setProperty('--accent', `var(--color-${accentLight})`);
			rootStyle.setProperty('--accent-light', `var(--color-${accentLight})`);
		}
		if (accentDark) {
			rootStyle.setProperty('--accent-dark', `var(--color-${accentDark})`);
		}
		
		// You might also want to update the Less variable's value if you plan to read it elsewhere,
		// though this won't recompile CSS. For pure JS-driven theming, updating CSS vars is key.
		// If you have a mechanism to persist this choice (e.g., localStorage) and re-apply on load,
		// you might also want to store the newColorName.
		console.log(`Primary color theme changed to ${newColorName}`);
	}
} 