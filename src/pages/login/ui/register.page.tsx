import { useState } from 'react'

import { Button, Input, InputGroup, Label, TextField } from '@heroui/react'
import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'

export const RegisterPage = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [isConfirmVisible, setIsConfirmVisible] = useState(false)

	const toggleVisibility = () => setIsVisible(!isVisible)
	const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible)

	const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<main className='mx-auto flex min-h-svh max-w-sm flex-col justify-center gap-4 px-8 py-10'>
			<h1 className='mb-4 text-center font-semibold text-3xl'>Sign Up</h1>

			<form className='flex flex-col gap-5' onSubmit={onSubmit}>
				<TextField name='username'>
					<Label>Username</Label>
					<Input placeholder='Enter your username' />
				</TextField>

				<TextField name='email' type='email'>
					<Label>Email</Label>
					<Input placeholder='Enter your email' />
				</TextField>

				<TextField name='password' minLength={8}>
					<Label>Password</Label>

					<InputGroup>
						<InputGroup.Input placeholder='Enter your password' type={isVisible ? 'text' : 'password'} />

						<InputGroup.Suffix className='pr-0'>
							<Button
								isIconOnly
								aria-label={isVisible ? 'Hide password' : 'Show password'}
								size='sm'
								variant='ghost'
								onPress={toggleVisibility}
							>
								{isVisible ? (
									<Icon className='pointer-events-none size-4' icon='solar:eye-closed-linear' />
								) : (
									<Icon className='pointer-events-none size-4' icon='solar:eye-bold' />
								)}
							</Button>
						</InputGroup.Suffix>
					</InputGroup>
				</TextField>

				<TextField name='confirmPassword'>
					<Label>Confirm Password</Label>

					<InputGroup>
						<InputGroup.Input placeholder='Confirm your password' type={isConfirmVisible ? 'text' : 'password'} />

						<InputGroup.Suffix className='pr-0'>
							<Button
								isIconOnly
								aria-label={isConfirmVisible ? 'Hide confirm password' : 'Show confirm password'}
								size='sm'
								variant='ghost'
								onPress={toggleConfirmVisibility}
							>
								{isConfirmVisible ? (
									<Icon className='pointer-events-none size-4' icon='solar:eye-closed-linear' />
								) : (
									<Icon className='pointer-events-none size-4' icon='solar:eye-bold' />
								)}
							</Button>
						</InputGroup.Suffix>
					</InputGroup>
				</TextField>

				<Button className='mt-3 w-full' type='submit'>
					Sign Up
				</Button>
			</form>

			<Link to='/login' className='link mx-auto text-sm'>
				Already have an account? Sign In
			</Link>
		</main>
	)
}
