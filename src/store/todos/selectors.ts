import { RootState } from '..'

export const selectTodos = ({ todos }: RootState) => todos.todos
export const selectActiveTodo = ({ todos }: RootState) =>
	todos.todos.filter(({ id }) => id === todos.activeTodoId)[0]
