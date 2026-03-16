import { lazy } from 'react'

import { createFormHook } from '@tanstack/react-form'

import { fieldContext, formContext } from './form-context'

const TextField = lazy(() => import('#/shared/ui/text-field').then((m) => ({ default: m.TextField })))
const PasswordField = lazy(() => import('#/shared/ui/password-field').then((m) => ({ default: m.PasswordField })))
const SubscribeButton = lazy(() => import('#/shared/ui/subscribe-button').then((m) => ({ default: m.SubscribeButton })))

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
