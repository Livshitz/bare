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
	plugins: [require('daisyui')],
};
