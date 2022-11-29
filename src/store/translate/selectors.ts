import { RootState } from '..'

export const selectIsTranslate = ({ translate }: RootState) =>
	translate.isTranslate
