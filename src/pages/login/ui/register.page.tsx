import { Form } from '@heroui/react'
import { revalidateLogic } from '@tanstack/react-form'
import { Link } from '@tanstack/react-router'

import { useAppForm } from '@/shared/lib/form'
import { FieldGroupPasswordFields } from '@/shared/ui/field-group-password-fields'

import { registerDefaultValues } from '../model/register-form'
import { registerSchema } from '../model/register-schema'

export const RegisterPage = () => {
	const form = useAppForm({
		defaultValues: registerDefaultValues,
		validationLogic: revalidateLogic(),
		validators: {
			onDynamic: registerSchema
		},
		onSubmit: async ({ value }) => {
			console.log(JSON.stringify(value, null, 2))
		}
	})

	return (
		<main className='mx-auto flex min-h-svh max-w-sm flex-col justify-center gap-4 px-8 py-10'>
			<h1 className='mb-4 text-center font-semibold text-3xl'>Sign Up</h1>

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
						name='username'
						children={(field) => <field.TextField label='Username' placeholder='Enter your username' />}
					/>

					<form.AppField
						name='email'
						children={(field) => <field.TextField label='Email' type='email' placeholder='Enter your email' />}
					/>

					<FieldGroupPasswordFields
						form={form}
						fields={{
							password: 'password',
							confirm_password: 'confirm_password'
						}}
					/>

					<form.SubscribeButton label='Sign Up' />
				</Form>
			</form.AppForm>

			<Link to='/login' className='link mx-auto text-sm'>
				Already have an account? Sign In
			</Link>
		</main>
	)
}
