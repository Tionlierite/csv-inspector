// Libraries
import React, { useEffect } from "react"
// Utils
import { useDispatch, useSelector } from "react-redux"
// Actions
import { toggleNotification } from "../../app/providers/store/reducers/notificationReducer.js"

export const NotificationWidget = () => {
	const dispatch = useDispatch()
	const showNotification = useSelector(
		state => state.notification.showNotification
	)
	const showNotificationMessage = useSelector(
		state => state.notification.message
	)

	useEffect(() => {
		let timer
		if (showNotification) {
			timer = setTimeout(() => {
				dispatch(toggleNotification())
			}, 3000)
		}

		return () => clearTimeout(timer)
	}, [showNotification, dispatch])

	if (!showNotification) return null

	return (
		<div className='fixed left-1/2 top-9 w-full -translate-x-1/2 rounded bg-[#FF6565] px-10 py-4 text-white sm:w-auto'>
			{showNotificationMessage}
		</div>
	)
}
