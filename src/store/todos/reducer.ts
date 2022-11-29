import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { ITodo } from '../../types'

interface TodosState {
	todos: ITodo[]
	activeTodoId: string
}

const initialState = { todos: [], activeTodoId: '' } as TodosState

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		setActiveTodoId(state, { payload: todoId }: PayloadAction<string>) {
			state.activeTodoId = todoId
		},
		setTodos(state, { payload: todos }: PayloadAction<ITodo[]>) {
			state.todos = todos
		},
	},
})

export const todosSliceActions = todosSlice.actions
export const todosReducer = todosSlice.reducer
