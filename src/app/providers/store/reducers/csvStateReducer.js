// Libraries
import { createSlice } from "@reduxjs/toolkit"
// Utils
import { localStorageCheck } from "./localStorageCheck.js"

const initialState = {
	stateOfLocalstorage: localStorageCheck().length >= 1 ? true : false
}

const stateOfLocalstorageSlice = createSlice({
	name: "stateOfLocalstorage",
	initialState,
	reducers: {
		changeValueToOpposite: state => {
			state.stateOfLocalstorage = !state.stateOfLocalstorage
		}
	}
})

export const { changeValueToOpposite } = stateOfLocalstorageSlice.actions
export default stateOfLocalstorageSlice.reducer
