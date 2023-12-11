// Libraries
import { combineReducers } from "@reduxjs/toolkit"
// Reducers
import tableOfContentsReducer from "./tableOfContentsReducer"
import stateOfLocalstorage from "./csvStateReducer"

const rootReducer = combineReducers({
	tableOfContents: tableOfContentsReducer,
	stateOfLocalstorage: stateOfLocalstorage
})

export default rootReducer
