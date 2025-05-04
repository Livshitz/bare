/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./demo/**/*.{vue,js,ts,jsx,tsx,pug}',
		'./src/**/*.{vue,js,ts,jsx,tsx,pug,less}', // Include less files if utilities are used there
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		require('daisyui'),
		function({ addBase, theme }) {
			const colors = theme('colors');
			const cssVars = {};
			
			Object.entries(colors).forEach(([colorName, colorValue]) => {
				if (typeof colorValue === 'object') {
					Object.entries(colorValue).forEach(([shade, value]) => {
						cssVars[`--color-${colorName}-${shade}`] = value;
					});
				} else {
					cssVars[`--color-${colorName}`] = colorValue;
				}
			});

			addBase({
				':root': cssVars,
			});
		},
	],
};
