import { FC } from 'react'

interface LoadingProps {}

const Loading: FC<LoadingProps> = (props) => {
	return (
		<div className="fixed max-w-[546px] w-screen h-screen flex items-center justify-center text-xl">
			Загрузка...
		</div>
	)
}

export default Loading
