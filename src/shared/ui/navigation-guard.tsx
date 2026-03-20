import { Button, Modal } from '@heroui/react'
import { Block } from '@tanstack/react-router'

type NavigationGuardProps = {
	isActive: boolean
	confirmText?: string
	cancelText?: string
	children: React.ReactNode
}

export const NavigationGuard = ({
	isActive,
	confirmText = 'Confirm',
	cancelText = 'Cancel',
	children
}: NavigationGuardProps) => (
	<Block shouldBlockFn={() => isActive} withResolver>
		{({ status, proceed, reset }) =>
			status === 'blocked' && (
				<Modal defaultOpen onOpenChange={reset}>
					<Modal.Backdrop>
						<Modal.Container className='text-center' placement='top'>
							<Modal.Dialog>
								<Modal.CloseTrigger />
								{children}
								<Modal.Footer>
									<Button variant='secondary' onPress={reset} className='w-full' slot='close'>
										{cancelText}
									</Button>
									<Button onPress={proceed} className='w-full'>
										{confirmText}
									</Button>
								</Modal.Footer>
							</Modal.Dialog>
						</Modal.Container>
					</Modal.Backdrop>
				</Modal>
			)
		}
	</Block>
)

NavigationGuard.Title = ({ children }: { children: React.ReactNode }) => (
	<Modal.Header>
		<Modal.Heading>{children}</Modal.Heading>
	</Modal.Header>
)

NavigationGuard.Content = ({ children }: { children: React.ReactNode }) => (
	<Modal.Body>{typeof children === 'string' ? <p>{children}</p> : children}</Modal.Body>
)
