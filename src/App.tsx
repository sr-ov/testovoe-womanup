import { useSelector } from 'react-redux'
import cn from 'clsx'

import { TodoInfo, Todos, Loading, AppError } from './components'
import { selectIsTranslate } from './store/translate'
import { useSetTodos } from './hooks'
import { selectActiveTodo } from './store/todos'

function App() {
	const { error, loading } = useSetTodos()
	const isTranslate = useSelector(selectIsTranslate)
	const activeTodo = useSelector(selectActiveTodo)

	return (
		<div className="app bg-amber-50 overflow-x-hidden">
			{error && <AppError />}
			{loading && <Loading />}
			{!error && !loading && (
				<div
					className={cn('grid grid-cols-[100%_100%] transition', {
						'-translate-x-full': isTranslate,
					})}
				>
					<div>
						<Todos />
					</div>
					<div>{activeTodo && <TodoInfo />}</div>
				</div>
			)}
		</div>
	)
}

export default App
