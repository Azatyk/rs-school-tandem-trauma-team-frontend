import { TanStackDevtools } from '@tanstack/react-devtools'
import { formDevtoolsPlugin } from '@tanstack/react-form-devtools'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
	component: RootComponent
})

function RootComponent() {
	return (
		<>
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
