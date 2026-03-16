import * as v from 'valibot'

export const loginSchema = v.object({
	email: v.pipe(
		v.string(),
		v.nonEmpty('Email is required'),
		v.email('Invalid email address'),
		v.maxLength(255, 'Email is too long')
	),
	password: v.pipe(v.string(), v.nonEmpty('Password is required'))
})

export type LoginSchema = v.InferInput<typeof loginSchema>
