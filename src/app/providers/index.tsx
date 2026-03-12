import { AuthProvider } from './auth'
import { RouterProvider } from './router'

export const Providers = () => {
	return (
		<AuthProvider>
			<RouterProvider />
		</AuthProvider>
	)
}
