// Libraries
import React, { useEffect } from "react"
// Utils
import { useDispatch, useSelector } from "react-redux"
// Widgets
import { InputFileWidget } from "../../widgets/InputFileWidget"
import { NotificationWidget } from "../../widgets/NotificationWidget"
// Actions
import { showNotification } from "../../app/providers/store/reducers/notificationReducer"

const MainPage = () => {
	const dispatch = useDispatch()
	const notificationMessage = useSelector(state => state.notification.message)
	const notificationStatus = useSelector(
		state => state.notification.showNotification
	)

	useEffect(() => {
		if (notificationMessage === "Файл еще не загружен" && !notificationStatus) {
			dispatch(showNotification())
		}
	}, [notificationMessage])

	return (
		<div className='main-page flex min-h-screen items-center justify-center'>
			<NotificationWidget />
			<InputFileWidget />
		</div>
	)
}

export default MainPage
