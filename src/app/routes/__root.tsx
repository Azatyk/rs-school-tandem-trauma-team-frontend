import { TanStackDevtools } from '@tanstack/react-devtools'
import { formDevtoolsPlugin } from '@tanstack/react-form-devtools'
import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import { createRootRouteWithContext, HeadContent, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import type { AuthState } from '#/app/providers/auth'
import { getTitle } from '#/shared/lib/get-title'
import { NotFound } from '#/shared/ui/not-found'

type RouterContext = {
	auth: AuthState
	queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
	head: () => ({
		meta: [
			{
				title: getTitle()
			}
		]
	}),
	component: RootComponent,
	notFoundComponent: NotFound
})

function RootComponent() {
	return (
		<>
			<HeadContent />
			<Outlet />
			<TanStackDevtools
				plugins={[
					formDevtoolsPlugin(),
					{
						name: 'TanStack Query',
						render: <ReactQueryDevtoolsPanel />
					},
					{
						name: 'TanStack Router',
						render: <TanStackRouterDevtoolsPanel />
					}
				]}
			/>
		</>
	)
}
