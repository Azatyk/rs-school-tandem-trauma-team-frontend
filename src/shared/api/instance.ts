import { createFetch, createSchema } from '@better-fetch/fetch'

import { authLocalStore } from './auth-local-store'
import { LoginCredentials, LoginResponse, RegisterCredentials } from './auth-schema'

const apiSchema = createSchema({
	'/api/login': {
		input: LoginCredentials,
		output: LoginResponse
	},
	'/api/register': {
		input: RegisterCredentials,
		output: LoginResponse
	},
	'/api/logout': {},
	'/api/me': {}
})

export const api = createFetch({
	schema: apiSchema,
	auth: {
		type: 'Bearer',
		token: () => authLocalStore.get('access_token')
	}
})
