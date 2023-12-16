// Utils
import { localStorageCheck } from "./localStorageCheck.js"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	stateOfLocalstorage: localStorageCheck().length >= 1
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
