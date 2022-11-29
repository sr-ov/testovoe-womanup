import { FC, KeyboardEvent } from 'react'

import { Input } from '..'
import { useCRUDTodos, useTextField } from '../../hooks'
import { ITodoBase } from '../../types'

interface TodosHeaderProps {}

const TodosHeader: FC<TodosHeaderProps> = () => {
	const { addTodo, error } = useCRUDTodos()
	const { value, onChange, setEmptyValue } = useTextField('')

	if (error) {
		return <>Произошла ошибка!!!</>
	}

	const onAddTodo = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== 'Enter' || !value) return

		addTodo({ title: value } as ITodoBase)
		setEmptyValue()
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
