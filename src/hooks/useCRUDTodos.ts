import { useState } from 'react'
import {
	FirestoreError,
	doc,
	setDoc,
	arrayUnion,
	updateDoc,
	deleteDoc,
} from 'firebase/firestore'

import { todosCollection } from '../firebase-config'
import { ITodoBase } from '../types'

export const useCRUDTodos = () => {
	const [error, setError] = useState<FirestoreError>()

	const addTodo = async (data: ITodoBase) => {
		try {
			const newTodoRef = doc(todosCollection)
			await setDoc(newTodoRef, { ...data, done: false, id: newTodoRef.id })
		} catch (error) {
			setError(error as FirestoreError)
			console.error(error)
		}
	}

	const updateTodo = async (id: string, todoData: ITodoBase) => {
		try {
			const data = todoData.files
				? { ...todoData, files: arrayUnion(...todoData.files) }
				: todoData
			await updateDoc(doc(todosCollection, id), data as any)
		} catch (error) {
			setError(error as FirestoreError)
			console.error(error)
		}
	}

	const deleteTodo = async (id: string) => {
		try {
			await deleteDoc(doc(todosCollection, id))
		} catch (error) {
			setError(error as FirestoreError)
			console.error(error)
		}
	}

	return {
		addTodo,
		updateTodo,
		deleteTodo,
		error,
	}
}
