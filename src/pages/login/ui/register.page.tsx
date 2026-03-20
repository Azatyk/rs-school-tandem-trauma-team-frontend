import { Form } from '@heroui/react'
import { revalidateLogic } from '@tanstack/react-form'
import { getRouteApi, Link } from '@tanstack/react-router'

import { auth } from '#/shared/api/auth'
import { useAppForm } from '#/shared/lib/form'
import { FieldGroupPasswordFields } from '#/shared/ui/field-group-password-fields'
import { NavigationGuard } from '#/shared/ui/navigation-guard'

import { registerDefaultValues } from '../model/register-form'
import { RegisterSchema } from '../model/register-schema'

const routeApi = getRouteApi('/(auth)/_centered/register')

export const RegisterPage = () => {
	const navigate = routeApi.useNavigate()

	const form = useAppForm({
		defaultValues: registerDefaultValues,
		validationLogic: revalidateLogic(),
		validators: {
			onDynamic: RegisterSchema,
			onSubmitAsync: async ({ value }) => {
				const { error } = await auth.register(value)

				return {
					form: error ? (error?.message ?? 'Something went wrong') : null
				}
			}
		},
		onSubmit: () => {
			navigate({ to: '/login', ignoreBlocker: true })
		}
	})

	return (
		<>
			<h1 className='mb-4 text-center font-semibold text-3xl'>Join Niro</h1>

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
						name='name'
						children={(field) => <field.TextField label='Name' placeholder='Enter your name' />}
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

					<form.Subscribe selector={(state) => state.errorMap}>
						{(errorMap) =>
							errorMap.onSubmit ? (
								<p className='field-error' data-visible>
									{errorMap.onSubmit.form}
								</p>
							) : null
						}
					</form.Subscribe>

					<form.SubscribeButton label='Sign Up' />
				</Form>
			</form.AppForm>

			<Link to='/login' className='link mx-auto text-sm'>
				Already have an account? Sign In
			</Link>

			<form.Subscribe selector={(state) => state.isDirty}>
				{(isDirty) => (
					<NavigationGuard isActive={isDirty} confirmText='Leave anyway' cancelText='Stay'>
						<NavigationGuard.Title>Unsaved Changes</NavigationGuard.Title>
						<NavigationGuard.Content>
							Are you sure you want to leave? Your changes will be lost.
						</NavigationGuard.Content>
					</NavigationGuard>
				)}
			</form.Subscribe>
		</>
	)
}
