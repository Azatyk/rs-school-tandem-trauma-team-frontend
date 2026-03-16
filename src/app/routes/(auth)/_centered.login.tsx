import { createFileRoute } from '@tanstack/react-router'

import { LoginPage } from '#/pages/login'
import { getTitle } from '#/shared/lib/get-title'

export const Route = createFileRoute('/(auth)/_centered/login')({
	head: () => ({
		meta: [
			{
				title: getTitle('Sign In')
			}
		]
	}),
	component: LoginPage
})
