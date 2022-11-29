import { createSlice } from '@reduxjs/toolkit'

interface TraslateState {
	isTranslate: boolean
}

const initialState = { isTranslate: false } as TraslateState

const translateSlice = createSlice({
	name: 'translate',
	initialState,
	reducers: {
		toggleIsTraslate(state) {
			state.isTranslate = !state.isTranslate
		},
	},
})

export const traslateSliceActions = translateSlice.actions
export const translateReducer = translateSlice.reducer
