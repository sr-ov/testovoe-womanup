import { configureStore } from '@reduxjs/toolkit'

import { todosReducer } from './todos'
import { translateReducer } from './translate'

export const store = configureStore({
	reducer: {
		todos: todosReducer,
		translate: translateReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
