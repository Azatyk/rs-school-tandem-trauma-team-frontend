import { createFetch, createSchema } from '@better-fetch/fetch'

import { authLocalStore } from './auth-local-store'
import { LoginCredentials, RegisterCredentials } from './auth-schema'

const apiSchema = createSchema({
	'/api/auth/login': {
		input: LoginCredentials
	},
	'/api/auth/register': {
		input: RegisterCredentials
	},
	'/api/auth/logout': {},
	'/api/auth/me': {}
})

export const api = createFetch({
	baseURL: import.meta.env.VITE_API_URL,
	schema: apiSchema,
	auth: {
		type: 'Bearer',
		token: () => authLocalStore.get('access_token')
	}
})
