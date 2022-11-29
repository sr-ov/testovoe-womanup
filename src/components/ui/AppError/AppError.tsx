import { FC } from 'react'

interface AppErrorProps {}

const AppError: FC<AppErrorProps> = (props) => {
	return (
		<div className="fixed max-w-[546px] w-screen h-screen flex items-center justify-center text-xl">
			Произошла ошибка!!!
		</div>
	)
}

export default AppError
