import { FC } from 'react'

import { ReactComponent as IconBack } from '../../assets/icons/back.svg'
import { useActions } from '../../hooks'

interface TodoInfoHeaderProps {}

const TodoInfoHeader: FC<TodoInfoHeaderProps> = () => {
	const { toggleIsTraslate } = useActions()

	return (
		<header className="ring-prim ring-2">
			<button className="h-[60px] p-4 block w-full" onClick={toggleIsTraslate}>
				<IconBack height={30} />
			</button>
		</header>
	)
}

export default TodoInfoHeader
