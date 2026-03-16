import { createFileRoute } from '@tanstack/react-router'

import { RegisterPage } from '#/pages/login'
import { getTitle } from '#/shared/lib/get-title'

export const Route = createFileRoute('/(auth)/_centered/register')({
	head: () => ({
		meta: [
			{
				title: getTitle('Sign Up')
			}
		]
	}),
	component: RegisterPage
})
