import { FC, KeyboardEvent } from 'react'

import { Input, AppError } from '..'
import { useCRUDTodos, useTextField } from '../../hooks'
import { ITodoBase } from '../../types'

interface TodosHeaderProps {}

const TodosHeader: FC<TodosHeaderProps> = () => {
	const { addTodo, error } = useCRUDTodos()
	const { value, onChange, setEmptyValue } = useTextField('')

	const onAddTodo = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== 'Enter' || !value) return

		addTodo({ title: value } as ITodoBase)
		setEmptyValue()
	}

	if (error) {
		return <AppError />
	}

	return (
		<header className="header">
			<Input
				placeholder="Введите"
				onKeyUp={onAddTodo}
				value={value}
				onChange={onChange}
			/>
		</header>
	)
}

export default TodosHeader
