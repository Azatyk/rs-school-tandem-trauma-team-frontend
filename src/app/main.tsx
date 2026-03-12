import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createRouter, RouterProvider } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'

import './styles/index.css'

import { AuthProvider } from './auth'

const router = createRouter({
	routeTree,
	defaultPreload: 'intent',
	scrollRestoration: true,
	context: {
		auth: undefined
	}
})

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

function InnerApp() {
	return <RouterProvider router={router} />
}

function App() {
	return (
		<AuthProvider>
			<InnerApp />
		</AuthProvider>
	)
}

const rootElement = document.getElementById('root')

if (!rootElement) {
	throw new Error('No root element found')
}

const root = createRoot(rootElement)

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
