import { createFileRoute } from '@tanstack/react-router'

import { RegisterPage } from '@/pages/login'

export const Route = createFileRoute('/register')({
	component: RegisterPage
})
