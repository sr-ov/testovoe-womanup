import { useUpdateEffect } from 'react-use'
import { useSelector } from 'react-redux'
import { Query } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { todosCollection } from '../firebase-config'
import { ITodo } from '../types'
import { useActions } from './useActions'
import { selectTodos } from '../store/todos'

export const useSetTodos = () => {
	const { setTodos } = useActions()
	const [todos, loading, error] = useCollectionData<ITodo>(
		todosCollection as Query<ITodo>
	)

	useUpdateEffect(() => {
		todos && setTodos(todos)
	}, [todos])

	return {
		todos: useSelector(selectTodos),
		loading,
		error,
	}
}
