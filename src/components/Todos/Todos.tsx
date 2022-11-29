import { FC } from 'react'

import TodosBody from './TodosBody'
import TodosHeader from './TodosHeader'

interface TodosProps {}

const Todos: FC<TodosProps> = () => {
	return (
		<>
			<TodosHeader />
			<TodosBody />
		</>
	)
}

export default Todos
