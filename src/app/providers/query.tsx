import { QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query'

import { getQueryClient } from '#/shared/lib/get-query-client'

export const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
	const queryClient = getQueryClient()

	return <TanstackQueryClientProvider client={queryClient}>{children}</TanstackQueryClientProvider>
}
