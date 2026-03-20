import { FieldError, TextField as HeroTextField, Input, Label } from '@heroui/react'

import { useFieldContext } from '#/shared/lib/form-context'

type TextFieldProps = {
	label: string
	type?: 'text' | 'email'
	placeholder: string
}

export const TextField = ({ label, type = 'text', placeholder }: TextFieldProps) => {
	const field = useFieldContext<string>()

	return (
		<HeroTextField
			name={field.name}
			type={type}
			value={field.state.value}
			onChange={field.handleChange}
			onBlur={field.handleBlur}
			isInvalid={field.state.meta.isTouched && !field.state.meta.isValid}
		>
			<Label>{label}</Label>

			<Input placeholder={placeholder} />

			<FieldError>{field.state.meta.errors[0]?.message}</FieldError>
		</HeroTextField>
	)
}
