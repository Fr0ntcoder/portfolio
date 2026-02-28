import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
	plugins: [
		vue(),
		vueDevTools(),
		tailwindcss(),
		svgLoader({
			svgo: true,
			svgoConfig: {
				plugins: [
					{
						name: 'preset-default',
						params: { overrides: { removeViewBox: false } }
					},
					'removeDimensions'
				]
			},
			defaultImport: 'component'
		})
	],
	server: {
		port: 3000
	}
})
