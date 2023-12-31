// Libraries
import React from "react"
// Utils
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
// Actions
import { setErrorMessage } from "../../app/providers/store/reducers/notificationReducer"

export const ProtectedRoute = ({ children }) => {
	const dispatch = useDispatch()

	const localstorageState = useSelector(
		state => state.stateOfLocalstorage.stateOfLocalstorage
	)
	if (!localstorageState) {
		dispatch(setErrorMessage("Файл еще не загружен"))
		return <Navigate to={"/"} />
	}
	return children
}
