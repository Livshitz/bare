import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
	content: [
		'./index.html',
		'./demo/**/*.{vue,js,ts,jsx,tsx,pug}',
		'./src/**/*.{vue,js,ts,jsx,tsx,pug,less}', // Include less files if utilities are used there
	],
	prefix: 't-',
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		daisyui,
		function({ addBase, theme }) {
			const colors = theme('colors');
			const cssVars: Record<string, string> = {};
			
			if (colors && typeof colors === 'object') {
				Object.entries(colors).forEach(([colorName, colorValue]) => {
					if (typeof colorValue === 'object' && colorValue !== null) {
						Object.entries(colorValue).forEach(([shade, value]) => {
							cssVars[`--color-${colorName}-${shade}`] = value as string;
						});
					} else {
						cssVars[`--color-${colorName}`] = colorValue as string;
					}
				});
			}

			addBase({
				':root': cssVars,
			});
		},
	],
};

export default config;
