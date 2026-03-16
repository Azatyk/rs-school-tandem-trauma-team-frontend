import { createContext, use, useState } from 'react'

import { auth } from '#/shared/api/auth'
import { authLocalStore } from '#/shared/api/auth-local-store'
import type { LoginCredentials, User } from '#/shared/api/auth-schema'

export type AuthState = {
	isAuthenticated: boolean
	user: User | undefined
	login: (credentials: LoginCredentials) => ReturnType<typeof auth.login>
	logout: () => Promise<void>
}

const AuthContext = createContext<AuthState | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | undefined>(() => authLocalStore.get('user'))
	const isAuthenticated = !!user

	const login = async (credentials: LoginCredentials) => {
		const response = await auth.login(credentials)

		if (response.data) {
			authLocalStore.set('user', response.data.user)
			authLocalStore.set('access_token', response.data.access_token)
			setUser(response.data.user)
		}

		return response
	}

	const logout = async () => {
		await auth.logout()
		authLocalStore.clear()
		setUser(undefined)
	}

	return <AuthContext value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext>
}

export const useAuth = () => {
	const context = use(AuthContext)

	if (!context) throw new Error('useAuth must be used within AuthProvider')

	return context
}
