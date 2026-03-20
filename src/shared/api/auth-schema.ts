import * as v from 'valibot'

export const User = v.object({
	id: v.string(),
	email: v.pipe(v.string(), v.email()),
	name: v.string()
})

export const LoginCredentials = v.object({
	email: v.pipe(v.string(), v.email()),
	password: v.string()
})

export const LoginResponse = v.object({
	user: User,
	access_token: v.string()
})

export const RegisterCredentials = v.object({
	email: v.pipe(v.string(), v.email()),
	password: v.string(),
	name: v.string()
})

export type User = v.InferOutput<typeof User>
export type LoginCredentials = v.InferOutput<typeof LoginCredentials>
export type LoginResponse = v.InferOutput<typeof LoginResponse>
export type RegisterCredentials = v.InferOutput<typeof RegisterCredentials>
