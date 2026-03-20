import { useReducer } from 'react'

import { Button, FieldError, InputGroup, Label, TextField } from '@heroui/react'
import { Icon } from '@iconify/react'

import { useFieldContext } from '#/shared/lib/form-context'

type PasswordFieldProps = {
	label: string
	placeholder: string
	shouldShowPassword?: boolean
}

export const PasswordField = ({ label, placeholder, shouldShowPassword = false }: PasswordFieldProps) => {
	const field = useFieldContext<string>()
	const [isVisible, setIsVisible] = useReducer((state) => !state, false)

	return (
		<TextField
			name={field.name}
			value={field.state.value}
			onChange={field.handleChange}
			onBlur={field.handleBlur}
			isInvalid={field.state.meta.isTouched && !field.state.meta.isValid}
		>
			<Label>{label}</Label>

			<InputGroup>
				<InputGroup.Input className='w-full' placeholder={placeholder} type={isVisible ? 'text' : 'password'} />

				{shouldShowPassword && (
					<InputGroup.Suffix className='pr-0'>
						<Button
							isIconOnly
							aria-label={isVisible ? 'Hide password' : 'Show password'}
							size='sm'
							variant='ghost'
							onPress={setIsVisible}
						>
							{isVisible ? (
								<Icon className='pointer-events-none size-4' icon='solar:eye-closed-linear' />
							) : (
								<Icon className='pointer-events-none size-4' icon='solar:eye-bold' />
							)}
						</Button>
					</InputGroup.Suffix>
				)}
			</InputGroup>

			<FieldError>{field.state.meta.errors[0]?.message}</FieldError>
		</TextField>
	)
}
