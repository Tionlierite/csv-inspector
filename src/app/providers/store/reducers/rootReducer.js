// Libraries
import { combineReducers } from "@reduxjs/toolkit"
// Reducers
import tableOfContentsReducer from "./tableOfContentsReducer"
import stateOfLocalstorage from "./csvStateReducer"
import notification from "./notificationReducer.js"

const rootReducer = combineReducers({
	tableOfContents: tableOfContentsReducer,
	stateOfLocalstorage: stateOfLocalstorage,
	notification: notification
})

export default rootReducer
