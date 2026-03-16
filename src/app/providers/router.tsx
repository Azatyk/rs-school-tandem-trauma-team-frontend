import { createRouter as createTanStackRouter, RouterProvider as TanstackRouterProvider } from '@tanstack/react-router'

import { routeTree } from '#/app/routeTree.gen'
import { getQueryClient } from '#/shared/lib/get-query-client'

import { useAuth } from './auth'

export const getRouter = () => {
	const router = createTanStackRouter({
		routeTree,

		scrollRestoration: true,
		defaultPreload: 'intent',
		defaultPreloadStaleTime: 0,
		context: {
			queryClient: undefined!,
			auth: undefined!
		}
	})

	return router
}

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof getRouter>
	}
}

export const RouterProvider = () => {
	const router = getRouter()
	const queryClient = getQueryClient()
	const auth = useAuth()

	return <TanstackRouterProvider router={router} context={{ auth, queryClient }} />
}
