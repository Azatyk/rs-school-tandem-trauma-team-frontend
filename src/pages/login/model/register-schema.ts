import * as v from 'valibot'

export const RegisterSchema = v.pipe(
	v.object({
		name: v.pipe(
			v.string(),
			v.trim(),
			v.nonEmpty('Name is required'),
			v.minLength(2, 'Name must be at least 2 characters'),
			v.maxLength(64, 'Name must be at most 64 characters'),
			v.regex(/^[\p{L}]+([ \-'][\p{L}]+)*$/u, 'Name can only contain letters, spaces, hyphens and apostrophes')
		),
		email: v.pipe(
			v.string(),
			v.trim(),
			v.nonEmpty('Email is required'),
			v.email('Invalid email address'),
			v.maxLength(255, 'Email is too long')
		),
		password: v.pipe(
			v.string(),
			v.trim(),
			v.nonEmpty('Password is required'),
			v.minLength(8, 'Password must be at least 8 characters'),
			v.maxLength(128, 'Password is too long'),
			v.regex(/\p{Ll}/u, 'Password must contain at least one lowercase letter'),
			v.regex(/\p{Lu}/u, 'Password must contain at least one uppercase letter'),
			v.regex(/\p{N}/u, 'Password must contain at least one number'),
			v.regex(/[^\p{L}\p{N}]/u, 'Password must contain at least one special character')
		),
		confirm_password: v.pipe(v.string(''), v.trim(), v.nonEmpty('Please confirm your password'))
	}),
	v.forward(
		v.partialCheck(
			[['password'], ['confirm_password']],
			(input) => input.password === input.confirm_password,
			'Passwords do not match'
		),
		['confirm_password']
	)
)

export type RegisterSchema = v.InferOutput<typeof RegisterSchema>
