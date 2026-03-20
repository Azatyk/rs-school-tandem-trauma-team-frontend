import { AuthProvider } from './auth'
import { QueryClientProvider } from './query'
import { RouterProvider } from './router'

export const Providers = () => {
	return (
		<QueryClientProvider>
			<AuthProvider>
				<RouterProvider />
			</AuthProvider>
		</QueryClientProvider>
	)
}
