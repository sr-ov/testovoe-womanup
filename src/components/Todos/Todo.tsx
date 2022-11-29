import { FC, MouseEvent, useCallback } from 'react'
import cn from 'clsx'

import { Checkbox, AppError } from '..'
import { ITodo, ITodoBase } from '../../types'
import { useActions, useCRUDTodos } from '../../hooks'
import TodoDate from './TodoDate'

interface TodoProps extends ITodo {}

const Todo: FC<TodoProps> = ({ done, date, id, title }) => {
	const { setActiveTodoId, toggleIsTraslate } = useActions()
	const { updateTodo, error } = useCRUDTodos()

	const onSetCurrentTodoId = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		setActiveTodoId(id)
		toggleIsTraslate()
	}

	const onToggleDone = useCallback(() => {
		updateTodo(id, { done: !done } as ITodoBase)
	}, [done])

	if (error) {
		return <AppError />
	}

	return (
		<div
			className={cn('grid grid-cols-[32px_1fr] gap-x-4 items-center', {
				['opacity-20']: done,
			})}
		>
			<Checkbox checked={done} onChange={onToggleDone} />
			<a className="space-y-1" href="#" onClick={onSetCurrentTodoId}>
				<div className="text-2xl h-min leading-[1]">{title}</div>
				{date && <TodoDate date={date} />}
			</a>
		</div>
	)
}

export default Todo
