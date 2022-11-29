import { FC } from 'react'
import cn from 'clsx'
import { InputProps } from 'react-html-props'

import { ReactComponent as IconCheck } from '../../../assets/icons/check.svg'

interface CheckboxProps extends InputProps {}

const Checkbox: FC<CheckboxProps> = ({ className, ...props }) => {
	return (
		<label
			className={cn([
				'block h-8 w-8 p-1 ring-1 ring-prim ring-inset rounded-full cursor-pointer',
				className,
			])}
		>
			<input
				className="visually-hidden peer/checkbox"
				type="checkbox"
				{...props}
			/>
			<IconCheck
				className="opacity-0 transition peer-checked/checkbox:opacity-100"
				width="100%"
				height="100%"
			/>
		</label>
	)
}

export default Checkbox
