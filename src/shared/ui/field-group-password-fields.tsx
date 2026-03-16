import { withFieldGroup } from '@/shared/lib/form'

type PasswordFields = {
	password: string
	confirm_password: string
}

const defaultValues: PasswordFields = {
	password: '',
	confirm_password: ''
}

export const FieldGroupPasswordFields = withFieldGroup({
	defaultValues,
	render: ({ group }) => {
		return (
			<>
				<group.AppField name='password'>
					{(field) => <field.PasswordField label='Password' placeholder='Enter your password' shouldShowPassword />}
				</group.AppField>

				<group.AppField name='confirm_password'>
					{(field) => (
						<field.PasswordField label='Confirm Password' placeholder='Confirm your password' shouldShowPassword />
					)}
				</group.AppField>
			</>
		)
	}
})
