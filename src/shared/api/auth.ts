import type { LoginCredentials, RegisterCredentials } from './auth-schema'
import { api } from './instance'

export const auth = {
	login: async (credentials: LoginCredentials) =>
		api('/api/login', {
			method: 'POST',
			body: credentials
		}),

	register: async (credentials: RegisterCredentials) =>
		api('/api/register', {
			method: 'POST',
			body: credentials
		}),

	logout: async () => api('/api/logout', { method: 'POST' }),

	me: async () => api('/api/me')
}
