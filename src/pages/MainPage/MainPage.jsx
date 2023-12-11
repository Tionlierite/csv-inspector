// Libraries
import React from "react"
// Widgets
import { InputFileWidget } from "../../widgets/InputFileWidget"
import { NotificationWidget } from "../../widgets/NotificationWidget/index.js"

const MainPage = () => {
	return (
		<div className='main-page flex min-h-screen items-center justify-center'>
			<NotificationWidget />
			<InputFileWidget />
		</div>
	)
}

export default MainPage
