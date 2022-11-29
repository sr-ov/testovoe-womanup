import { forwardRef } from 'react'
import TextareaAutosize, {
	TextareaAutosizeProps,
} from 'react-textarea-autosize'
import cn from 'clsx'

interface ITextareaProps extends TextareaAutosizeProps {}

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<TextareaAutosize
				className={cn(
					'resize-none bg-transparent outline-none placeholder:text-slate-500',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)

export default Textarea
