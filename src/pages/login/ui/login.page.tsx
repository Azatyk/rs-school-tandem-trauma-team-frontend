import { Form } from '@heroui/react'
import { revalidateLogic } from '@tanstack/react-form'
import { getRouteApi, Link } from '@tanstack/react-router'

import { useAuth } from '#/app/providers/auth'
import { useAppForm } from '#/shared/lib/form'

import { loginDefaultValues } from '../model/login-form'
import { LoginSchema } from '../model/login-schema'

const routeApi = getRouteApi('/(auth)/_centered/login')

export const LoginPage = () => {
	const navigate = routeApi.useNavigate()
	const { redirect } = routeApi.useSearch()
	const { login } = useAuth()

	const form = useAppForm({
		defaultValues: loginDefaultValues,
		validationLogic: revalidateLogic(),
		validators: {
			onDynamic: LoginSchema,
			onSubmitAsync: async ({ value }) => {
				const { error } = await login(value)

				return error ? { form: error.message } : null
			}
		},
		onSubmit: async () => {
			navigate({ to: redirect })
		}
	})

	return (
		<>
			<h1 className='mb-4 text-center font-semibold text-3xl'>Welcome to Niro</h1>

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

					<form.Subscribe selector={(state) => state.errorMap}>
						{(errorMap) =>
							errorMap.onSubmit ? (
								<p className='field-error' data-visible>
									{errorMap.onSubmit.form}
								</p>
							) : null
						}
					</form.Subscribe>

					<form.SubscribeButton label='Sign In' />
				</Form>
			</form.AppForm>

			<Link to='/register' className='link mx-auto text-sm'>
				Don't have an account? Sign Up
			</Link>
		</>
	)
}
