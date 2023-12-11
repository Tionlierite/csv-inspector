// Libraries
import { combineReducers } from "@reduxjs/toolkit"
// Reducers
import tableOfContentsReducer from "./tableOfContentsReducer"

const rootReducer = combineReducers({
	tableOfContents: tableOfContentsReducer
})

export default rootReducer
