import { defineConfig, Rollup } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
	if (command === 'serve') (global as any).isDev = true;

	return {
		plugins: [
			vue(),
			// dts({
			//   insertTypesEntry: true,
			// }),
		],
		root: command === 'serve' ? 'demo' : './',
		build: {
			outDir: 'dist',
			rollupOptions: {
				input: {
					main: resolve(__dirname, 'demo/index.html'),
					lib: resolve(__dirname, 'src/index.scss'),
				},
				output: <Rollup.OutputOptions>{
					entryFileNames: (chunkInfo) => {
						return chunkInfo.name === 'lib' ? 'x-css.css' : '[name].js';
					},
				},
			},
			// cssCodeSplit: false,
			// lib: {
			//   entry: resolve(__dirname, 'src/index.css'),
			//   fileName: () => 'x-css.css',
			// },
			// rollupOptions: {
			//   input: resolve(__dirname, 'src/index.css'),
			// },
		},
		// css: {
		// 	// preprocessorOptions: {
		// 	//   less: {
		// 	//     javascriptEnabled: true,
		// 	//   },
		// 	// },
		// 	postcss: {
		// 		plugins: [
		// 			tailwindcssPostcss, // Use the new plugin
		// 			// autoprefixer, // Remove autoprefixer
		// 		],
		// 	},
		// },
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern', // or "modern"
					// silenceDeprecations: [
					// 	'mixed-decls',
					// 	'color-functions',
					// 	'global-builtin',
					// 	'import',
					// 	'legacy-js-api',
					// ],
				}
			}
		},

		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
				'~': fileURLToPath(new URL('./node_modules', import.meta.url)),
				'@assets': resolve(__dirname, "src/assets"),
				// "/src": path.resolve(process.cwd(), "src"),
			},
			extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
		},
	}
});
