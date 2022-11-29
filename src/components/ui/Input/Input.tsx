import { FC } from 'react'
import { InputProps } from 'react-html-props'
import cn from 'clsx'

const TextField: FC<InputProps> = ({ className, ...props }) => {
	return (
		<input
			className={cn(
				className,
				'block w-full p-4 outline-none bg-transparent ring-2 ring-prim focus:ring-8 transition text-lg placeholder:text-slate-500'
			)}
			type="text"
			{...props}
		/>
	)
}

export default TextField
