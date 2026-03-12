import { Button, Input, Label, TextField } from '@heroui/react'
import { Link } from '@tanstack/react-router'

export const LoginPage = () => {
	const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<main className='mx-auto flex min-h-svh max-w-sm flex-col justify-center gap-4 px-8 py-10'>
			<h1 className='mb-4 text-center font-semibold text-3xl'>Sign In</h1>

			<form className='flex flex-col gap-5' onSubmit={onSubmit}>
				<TextField name='email' type='email'>
					<Label>Email</Label>
					<Input placeholder='Enter your email' />
				</TextField>

				<TextField name='password' type='password'>
					<Label>Password</Label>
					<Input placeholder='Enter your password' />
				</TextField>

				<Button className='mt-3 w-full' type='submit'>
					Sign In
				</Button>
			</form>

			<Link to='/register' className='link mx-auto text-sm'>
				Don't have an account? Sign Up
			</Link>
		</main>
	)
}
