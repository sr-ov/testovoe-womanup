import { FC, useMemo } from 'react'

interface TodoDateProps {
	date: string
}

const TodoDate: FC<TodoDateProps> = ({ date }) => {
	const timeIsUp = useMemo(() => Date.now() >= new Date(date).getTime(), [date])
	const dateRu = useMemo(() => new Date(date).toLocaleString('ru'), [date])

	return (
		<div className="text-[12px] h-min leading-[1]">
			{timeIsUp ? <span className="text-red-500">Время истекло</span> : dateRu}
		</div>
	)
}

export default TodoDate
