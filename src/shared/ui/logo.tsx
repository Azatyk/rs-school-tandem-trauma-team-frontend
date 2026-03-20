import { cn } from '#/shared/lib/cn'

type LogoProps = {
	className?: string
	size?: number | string
	src?: string
	alt?: string
	withText?: boolean
	text?: string
}

export const Logo = ({
	className,
	size = 64,
	src = '/logo.svg',
	alt = '',
	withText = false,
	text = 'Niro'
}: LogoProps) => {
	if (withText) {
		return (
			<div className={cn('flex items-center gap-2', className)}>
				<img
					src={src}
					width={size}
					height={size}
					alt={alt}
					className='shrink-0'
					style={{ width: size, height: size }}
				/>
				<span className='font-semibold text-lg'>{text}</span>
			</div>
		)
	}

	return (
		<img
			className={cn('block', className)}
			src={src}
			width={size}
			height={size}
			alt={alt}
			style={{ width: size, height: size }}
		/>
	)
}
