import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const config = defineConfig({
	server: {
		port: 4321
	},
	resolve: {
		tsconfigPaths: true
	},
	plugins: [
		devtools(),
		tailwindcss(),
		tanstackRouter({
			target: 'react',
			autoCodeSplitting: true,
			routesDirectory: './src/app/routes',
			generatedRouteTree: './src/app/routeTree.gen.ts',
			routeFileIgnorePrefix: '-',
			quoteStyle: 'single'
		}),
		viteReact({
			babel: {
				plugins: [['babel-plugin-react-compiler']]
			}
		})
	]
})

export default config
