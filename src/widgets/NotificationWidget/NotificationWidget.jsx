// Libraries
import React, { useEffect, useState } from "react"
// Utils
import { useDispatch, useSelector } from "react-redux"
// Actions
import {
	setErrorMessage,
	hideNotification
} from "../../app/providers/store/reducers/notificationReducer"

export const NotificationWidget = () => {
	const dispatch = useDispatch()
	const notificationStatus = useSelector(
		state => state.notification.notificationStatus
	)
	const showNotificationMessage = useSelector(
		state => state.notification.message
	)
	const [isVisible, setIsVisible] = useState("opacity-0")

	useEffect(() => {
		if (notificationStatus) {
			setIsVisible("opacity-100")
			const timeoutID = setTimeout(() => {
				setIsVisible("opacity-0")
				setTimeout(() => {
					dispatch(hideNotification())
					dispatch(setErrorMessage(""))
				}, 450)
			}, 3000)

			return () => clearTimeout(timeoutID)
		}
	}, [notificationStatus])

	return (
		<div
			className={`fixed left-1/2 top-9 w-full -translate-x-1/2 rounded bg-[#FF6565] px-10 py-4 text-white transition-opacity ease-in-out sm:w-auto ${isVisible} duration-500`}
		>
			{showNotificationMessage}
		</div>
	)
}
