import { ChangeEvent, FC, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import DateTimePicker from 'react-datetime-picker'

import { Checkbox, AttachFile, Remove, Textarea, AppError } from '..'
import { useActions, useCRUDTodos, useTextField } from '../../hooks'
import { ITodoBase } from '../../types'
import { selectActiveTodo } from '../../store/todos'
import { useDebounce } from 'react-use'

interface TodoInfoBodyProps {}

const TodoInfoBody: FC<TodoInfoBodyProps> = () => {
	const { date, description, done, files, id, title } =
		useSelector(selectActiveTodo)
	const { deleteTodo, updateTodo, error } = useCRUDTodos()
	const { setActiveTodoId, toggleIsTraslate } = useActions()
	const { value: titleValue, onChange: onChangeTitleValue } =
		useTextField(title)
	const { value: descriptionValue, onChange: onChangeDescriptionValue } =
		useTextField(description)
	const [dateValue, setDateValue] = useState(date ? new Date(date) : undefined)

	const onDeleteTodo = useCallback(() => {
		deleteTodo(id)
		setActiveTodoId('')
		toggleIsTraslate()
	}, [id])

	const onUpdateTodo = (data: ITodoBase) => {
		updateTodo(id, data)
	}

	const addFiles = (e: ChangeEvent<HTMLInputElement>) => {
		const { files } = e.currentTarget
		if (!files?.length) return

		onUpdateTodo({ files: Array.from(files, ({ name }) => name) } as ITodoBase)
	}

	useDebounce(
		() => {
			dateValue && onUpdateTodo({ date: dateValue.toISOString() } as ITodoBase)
		},
		2000,
		[dateValue]
	)

	if (error) {
		return <AppError />
	}

	return (
		<div className="grid grid-cols-[32px_1fr] gap-4 p-4 pt-8">
			<ul className="space-y-2">
				<li>
					<Checkbox
						checked={done}
						onChange={() => onUpdateTodo({ done: !done } as ITodoBase)}
					/>
				</li>
				<li>
					<AttachFile multiple onChange={addFiles} />
				</li>
				<li>
					<Remove onRemove={onDeleteTodo} />
				</li>
			</ul>

			<div className="grid gap-4">
				<label>
					<DateTimePicker value={dateValue} onChange={setDateValue} />
				</label>

				<Textarea
					className="text-2xl"
					placeholder="Ввести название"
					value={titleValue}
					onChange={onChangeTitleValue}
					onBlur={() => onUpdateTodo({ title: titleValue } as ITodoBase)}
				/>
				<Textarea
					minRows={1}
					placeholder="Ввести описание"
					value={descriptionValue}
					onChange={onChangeDescriptionValue}
					onBlur={() =>
						onUpdateTodo({ description: descriptionValue } as ITodoBase)
					}
				/>

				<ul>
					{files?.map((file) => (
						<li key={file}>{file}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default TodoInfoBody
