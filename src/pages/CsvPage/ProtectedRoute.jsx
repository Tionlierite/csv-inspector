// Libraries
import React from "react"
// Utils
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children }) => {
	const localstorageState = useSelector(
		state => state.stateOfLocalstorage.stateOfLocalstorage
	)
	console.log(localstorageState)
	if (!localstorageState) return <Navigate to={"/"} />
	return children
}
