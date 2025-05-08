import { ref, watch } from 'vue';
import { createApp } from 'vue';
import { Router } from 'vue-router';
import { Breakpoints } from './Breakpoints';
import { DevtoolsHelper } from './DevtoolsHelper';
import { DarkModeManager } from './DarkMode';

export class Helpers {
	public darkMode: DarkModeManager = null;

	public breakpoints = new Breakpoints();

	constructor(private app: ReturnType<typeof createApp>, private router: Router) {
		new DevtoolsHelper(this.app, this.router);
		this.darkMode = new DarkModeManager();
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