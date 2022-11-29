export interface ITodoBase {
	done: boolean
	title: string
	description?: string
	files?: string[]
	date?: string
}

export interface ITodo extends ITodoBase {
	id: string
}
