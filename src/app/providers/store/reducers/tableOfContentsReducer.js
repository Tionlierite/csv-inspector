// Libraries
import { createSlice } from "@reduxjs/toolkit"
// Utils
import { localStorageCheck } from "./localStorageCheck.js"

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
