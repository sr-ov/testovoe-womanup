import { FC } from 'react'

import TodoInfoBody from './TodoInfoBody'
import TodoInfoHeader from './TodoInfoHeader'

interface TodoInfoProps {}

const TodoInfo: FC<TodoInfoProps> = () => {
	return (
		<>
			<TodoInfoHeader />
			<TodoInfoBody />
		</>
	)
}

export default TodoInfo
