import { createFormHook, createFormHookContexts } from '@tanstack/react-form'

import { PasswordField } from '@/shared/ui/password-field'
import { SubscribeButton } from '@/shared/ui/subscribe-button'
import { TextField } from '@/shared/ui/text-field'

export const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts()

export const { useAppForm, withFieldGroup } = createFormHook({
	fieldComponents: {
		TextField,
		PasswordField
	},
	formComponents: {
		SubscribeButton
	},
	fieldContext,
	formContext
})
