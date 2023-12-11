// Libraries
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	showNotification: false,
	message: ""
}

const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		toggleNotification: state => {
			state.showNotification = !state.showNotification
		},
		setErrorMessage: (state, action) => {
			state.showNotification = !state.showNotification
			state.message = action.payload
		}
	}
})

export const { toggleNotification, setErrorMessage } = notificationSlice.actions
export default notificationSlice.reducer
