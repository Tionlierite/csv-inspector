import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	tableOfContents: [] // Local Storage
}

const tableOfContentsSlice = createSlice({
	name: "tableOfContents",
	initialState,
	reducers: {
		addTableOfContents: (state, action) => {
			state.tableOfContents = action.payload
		}
	}
})

export const { addTableOfContents } = tableOfContentsSlice.actions
export default tableOfContentsSlice.reducer
