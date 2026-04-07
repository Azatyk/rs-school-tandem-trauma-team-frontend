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

export const LoginSuccess = v.object({
	user: User,
	access_token: v.string()
})

export const LoginError = v.object({
	success: v.literal(false),
	message: v.string()
})

export const RegisterSuccess = v.object({
	success: v.literal(true),
	createdAt: v.string(),
	updatedAt: v.string(),
	deletedAt: v.nullable(v.string()),
	id: v.string(),
	email: v.pipe(v.string(), v.email()),
	name: v.string(),
	passwordHash: v.string()
})

export const RegisterError = v.object({
	success: v.literal(false),
	message: v.string(),
	errors: v.object({
		name: v.array(v.string()),
		email: v.array(v.string()),
		password: v.array(v.string())
	})
})

export const RegisterCredentials = v.object({
	email: v.pipe(v.string(), v.email()),
	password: v.string(),
	name: v.string()
})

export type User = v.InferOutput<typeof User>
export type LoginCredentials = v.InferOutput<typeof LoginCredentials>
export type LoginSuccess = v.InferOutput<typeof LoginSuccess>
export type LoginError = v.InferOutput<typeof LoginError>
export type RegisterCredentials = v.InferOutput<typeof RegisterCredentials>
export type RegisterSuccess = v.InferOutput<typeof RegisterSuccess>
export type RegisterError = v.InferOutput<typeof RegisterError>
