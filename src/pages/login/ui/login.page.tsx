import { Form } from '@heroui/react'
import { revalidateLogic } from '@tanstack/react-form'
import { Link } from '@tanstack/react-router'

import { useAppForm } from '@/shared/lib/form'

import { loginDefaultValues } from '../model/login-form'
import { loginSchema } from '../model/login-schema'

export const LoginPage = () => {
	const form = useAppForm({
		defaultValues: loginDefaultValues,
		validationLogic: revalidateLogic(),
		validators: {
			onDynamic: loginSchema
		},
		onSubmit: async ({ value }) => {
			console.log(JSON.stringify(value, null, 2))
		}
	})

	return (
		<main className='mx-auto flex min-h-svh max-w-sm flex-col justify-center gap-4 px-8 py-10'>
			<h1 className='mb-4 text-center font-semibold text-3xl'>Sign In</h1>

			<form.AppForm>
				<Form
					className='flex flex-col gap-5'
					validationBehavior='aria'
					onSubmit={(event) => {
						event.preventDefault()
						event.stopPropagation()
						form.handleSubmit()
					}}
				>
					<form.AppField
						name='email'
						children={(field) => <field.TextField label='Email' type='email' placeholder='Enter your email' />}
					/>

					<form.AppField
						name='password'
						children={(field) => <field.PasswordField label='Password' placeholder='Enter your password' />}
					/>

					<form.SubscribeButton label='Sign In' />
				</Form>
			</form.AppForm>

			<Link to='/register' className='link mx-auto text-sm'>
				Don't have an account? Sign Up
			</Link>
		</main>
	)
}
