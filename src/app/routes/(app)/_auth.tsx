import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_auth')({
	component: AuthLayout,
	beforeLoad: ({ context, location }) => {
		if (!context.auth.isAuthenticated) {
			throw redirect({
				to: '/login',
				search: {
					redirect: location.href
				},
				replace: true
			})
		}
	}
})

function AuthLayout() {
	return <Outlet />
}
