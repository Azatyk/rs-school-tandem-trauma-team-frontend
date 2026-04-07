import type {
	LoginCredentials,
	LoginError,
	LoginSuccess,
	RegisterCredentials,
	RegisterError,
	RegisterSuccess
} from './auth-schema'
import { api } from './instance'

export const auth = {
	login: async (credentials: LoginCredentials) =>
		api<LoginSuccess, LoginError>('/api/auth/login', {
			method: 'POST',
			body: credentials
		}),

	register: async (credentials: RegisterCredentials) =>
		api<RegisterSuccess, RegisterError>('/api/auth/register', {
			method: 'POST',
			body: credentials
		}),

	logout: async () => api('/api/logout', { method: 'POST' }),

	me: async () => api('/api/me')
}
