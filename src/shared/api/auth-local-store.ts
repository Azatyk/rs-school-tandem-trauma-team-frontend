import { createLocalStore } from '../lib/create-local-store'
import type { User } from './auth-schema'

type AuthSchema = {
	access_token: string
	user: User
}

export const authLocalStore = createLocalStore<AuthSchema>('auth')
