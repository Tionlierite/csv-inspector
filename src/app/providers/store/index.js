// Libraries
import { configureStore } from "@reduxjs/toolkit"
// Root Reducer
import rootReducer from "./reducers/rootReducer"

export const store = configureStore({
	reducer: rootReducer
})
