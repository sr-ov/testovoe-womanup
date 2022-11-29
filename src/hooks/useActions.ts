import { createActionsHook } from 'react-redux-actions-hook'

import { todosSliceActions } from '../store/todos'
import { traslateSliceActions } from '../store/translate'

export const useActions = createActionsHook({
	...todosSliceActions,
	...traslateSliceActions,
})
