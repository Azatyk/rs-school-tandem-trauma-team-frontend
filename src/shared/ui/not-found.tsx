import { Link } from '@tanstack/react-router'

export const NotFound = () => (
	<main className='flex min-h-svh flex-col justify-center px-6 py-24 text-center sm:py-32 lg:px-8'>
		<p className='font-semibold text-accent'>404</p>

		<h1 className='mt-4 text-balance font-semibold text-5xl tracking-tight sm:text-7xl'>Page not found</h1>

		<p className='mt-6 text-pretty font-medium text-lg text-muted sm:text-xl/8'>
			Sorry, we couldn’t find the page you’re looking for.
		</p>

		<Link to='/' className='button button--lg button--primary mx-auto mt-10'>
			Go back home
		</Link>
	</main>
)
