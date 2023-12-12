// Libraries
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	notificationStatus: false,
	message: ""
}

const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		showNotification: state => {
			state.notificationStatus = true
		},
		hideNotification: state => {
			state.notificationStatus = false
		},
		setErrorMessage: (state, action) => {
			state.message = action.payload
		}
	}
})

export const { showNotification, hideNotification, setErrorMessage } =
	notificationSlice.actions
export default notificationSlice.reducer
