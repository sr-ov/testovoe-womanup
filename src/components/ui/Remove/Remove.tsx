import { FC } from 'react'
import { useInterval, useBoolean } from 'react-use'
import { ButtonProps } from 'react-html-props'
import cn from 'clsx'

import { ReactComponent as IconConfirm } from '../../../assets/icons/check.svg'
import { ReactComponent as IconTrash } from '../../../assets/icons/trash.svg'

interface RemoveProps extends ButtonProps {
	onRemove: VoidFunction
}

const Remove: FC<RemoveProps> = ({ onRemove, ...props }) => {
	const [isTryRemove, setIsTryRemove] = useBoolean(false)
	const onClick = !isTryRemove ? setIsTryRemove : onRemove

	useInterval(setIsTryRemove, isTryRemove ? 1000 : null)

	return (
		<button
			className="block h-8 w-8 p-1.5 bg-prim rounded-full overflow-hidden"
			onClick={onClick}
			{...props}
		>
			<span
				className={cn([
					'grid grid-rows-2 gap-[10px] transition',
					{ '-translate-y-[30px]': isTryRemove },
				])}
			>
				<IconTrash fill="#fffbeb" />
				<IconConfirm fill="#fffbeb" stroke="#fffbeb" />
			</span>
		</button>
	)
}

export default Remove
