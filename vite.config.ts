import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

export default defineConfig({
	plugins: [vue()],
	build: {
		outDir: 'dist',
		lib: {
			entry: {
				index: resolve(__dirname, 'src/index.ts'),
				components: resolve(__dirname, 'src/components/index.ts')
			},
			name: 'bare',
			fileName: (format, entryName) => `${entryName}.${format}.js`,
		},
		rollupOptions: {
			// Externalize deps that shouldn't be bundled into the library
			external: ['vue'],
			output: {
				// Global variables to use in UMD build for externalized deps
				globals: {
					vue: 'Vue',
				},
				// Generate CSS as a separate file
				assetFileNames: (assetInfo) => {
					return assetInfo.name === 'style.css' ? 'bare.css' : `${assetInfo.name}`;
				},
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern',
			}
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'~': fileURLToPath(new URL('./node_modules', import.meta.url)),
			'@assets': resolve(__dirname, "src/assets"),
			'@livz/bare': resolve(__dirname, "src"),
		},
		extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
	},
});
