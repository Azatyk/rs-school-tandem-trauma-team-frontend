import * as v from 'valibot'

export const registerSchema = v.pipe(
	v.object({
		username: v.pipe(
			v.string(),
			v.nonEmpty('Username is required'),
			v.minLength(3, 'Username must be at least 3 characters'),
			v.maxLength(32, 'Username must be at most 32 characters'),
			v.regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers and underscores')
		),
		email: v.pipe(
			v.string(),
			v.nonEmpty('Email is required'),
			v.email('Invalid email address'),
			v.maxLength(255, 'Email is too long')
		),
		password: v.pipe(
			v.string(),
			v.nonEmpty('Password is required'),
			v.minLength(8, 'Password must be at least 8 characters'),
			v.maxLength(128, 'Password is too long'),
			v.regex(/\p{Ll}/u, 'Password must contain at least one lowercase letter'),
			v.regex(/\p{Lu}/u, 'Password must contain at least one uppercase letter'),
			v.regex(/\p{N}/u, 'Password must contain at least one number'),
			v.regex(/[^\p{L}\p{N}]/u, 'Password must contain at least one special character')
		),
		confirm_password: v.pipe(v.string(''), v.nonEmpty('Please confirm your password'))
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

export type RegisterSchema = v.InferOutput<typeof registerSchema>
