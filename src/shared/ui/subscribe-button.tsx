import { Button } from '@heroui/react'

import { useFormContext } from '#/shared/lib/form-context'

type SubmitButtonProps = {
	label: string
}

export const SubscribeButton = ({ label }: SubmitButtonProps) => {
	const form = useFormContext()

	return (
		<form.Subscribe
			selector={(state) => [state.canSubmit, state.isSubmitting, state.isPristine]}
			children={([canSubmit, isSubmitting, isPristine]) => (
				<Button className='mt-3 w-full' type='submit' isDisabled={!canSubmit || isPristine}>
					{isSubmitting ? 'Loading...' : label}
				</Button>
			)}
		/>
	)
}
