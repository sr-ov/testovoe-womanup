import { FC } from 'react'
import { useSelector } from 'react-redux'

import { selectTodos } from '../../store/todos'
import Todo from './Todo'

interface TodosBodyProps {}

const TodosBody: FC<TodosBodyProps> = () => {
	const todos = useSelector(selectTodos)

	return (
		<main className="main p-4 pt-8">
			<ul className="space-y-4">
				{todos?.map((todo) => (
					<li key={todo.id}>
						<Todo {...todo} />
					</li>
				))}
			</ul>
		</main>
	)
}

export default TodosBody
