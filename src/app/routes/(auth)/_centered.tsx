import { Suspense } from 'react'

import { Spinner } from '@heroui/react'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import * as v from 'valibot'

import { Logo } from '#/shared/ui/logo'

const REDIRECT_FALLBACK = '/dashboard' as const

export const Route = createFileRoute('/(auth)/_centered')({
	component: CenteredLayout,
	validateSearch: v.object({
		redirect: v.optional(v.string())
	}),
	beforeLoad: ({ context, search }) => {
		if (context.auth.isAuthenticated) {
			throw redirect({ to: search.redirect ?? REDIRECT_FALLBACK })
		}
	}
})

function CenteredLayout() {
	return (
		<main className='mx-auto flex min-h-svh max-w-sm flex-col justify-center gap-4 px-8 py-10'>
			<Suspense fallback={<Spinner color='current' size='xl' className='mx-auto' />}>
				<Logo className='self-center' />
				<Outlet />
			</Suspense>
		</main>
	)
}
