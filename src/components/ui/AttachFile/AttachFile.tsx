import { FC } from 'react'
import { InputProps } from 'react-html-props'

import { ReactComponent as IconAttach } from '../../../assets/icons/attachment.svg'

interface AttachFileProps extends InputProps {}

const AttachFile: FC<AttachFileProps> = (props) => {
	return (
		<label className="block h-8 w-8 p-1.5 bg-prim rounded-full cursor-pointer">
			<input className="visually-hidden" type="file" {...props} />
			<IconAttach fill="#fffbeb" width="100%" height="100%" />
		</label>
	)
}

export default AttachFile
