import * as v from 'valibot'

export const LoginSchema = v.object({
	email: v.pipe(
		v.string(),
		v.trim(),
		v.nonEmpty('Email is required'),
		v.email('Invalid email address'),
		v.maxLength(255, 'Email is too long')
	),
	password: v.pipe(v.string(), v.trim(), v.nonEmpty('Password is required'))
})

export type LoginSchema = v.InferInput<typeof LoginSchema>
