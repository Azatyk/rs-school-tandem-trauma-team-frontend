import { createContext, use, useCallback, useEffect, useState } from 'react'

export interface AuthContext {
	isAuthenticated: boolean
	login: (username: string) => Promise<void>
	logout: () => Promise<void>
	user: string | null
}

const AuthContext = createContext<AuthContext | null>(null)

const key = 'tanstack.auth.user'

function getStoredUser() {
	return localStorage.getItem(key)
}

function setStoredUser(user: string | null) {
	if (user) {
		localStorage.setItem(key, user)
	} else {
		localStorage.removeItem(key)
	}
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<string | null>(getStoredUser())
	const isAuthenticated = !!user

	const logout = useCallback(async () => {
		setStoredUser(null)
		setUser(null)
	}, [])

	const login = useCallback(async (username: string) => {
		setStoredUser(username)
		setUser(username)
	}, [])

	useEffect(() => {
		setUser(getStoredUser())
	}, [])

	return <AuthContext value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext>
}

export function useAuth() {
	const context = use(AuthContext)

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}

	return context
}
