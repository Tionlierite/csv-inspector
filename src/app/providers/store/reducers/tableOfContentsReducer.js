// Utils
import { localStorageCheck } from "./localStorageCheck"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	tableOfContents: localStorageCheck()
}

const tableOfContentsSlice = createSlice({
	name: "tableOfContents",
	initialState,
	reducers: {
		addTableOfContents: (state, action) => {
			state.tableOfContents = action.payload
		},
		resetValues: state => {
			state.tableOfContents = []
		}
	}
})

export const { addTableOfContents, resetValues } = tableOfContentsSlice.actions
export default tableOfContentsSlice.reducer
