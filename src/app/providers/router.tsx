import { createRouter, RouterProvider as TanstackRouterProvider } from '@tanstack/react-router'

import { routeTree } from '../routeTree.gen'

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

export const RouterProvider = () => {
	return <TanstackRouterProvider router={router} />
}
