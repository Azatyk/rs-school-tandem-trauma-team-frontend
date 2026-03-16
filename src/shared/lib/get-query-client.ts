import { QueryClient } from '@tanstack/react-query'

let queryClient: QueryClient | undefined

export const getQueryClient = () => {
	if (queryClient) {
		return queryClient
	}

	queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false
			}
		}
	})

	return queryClient
}
