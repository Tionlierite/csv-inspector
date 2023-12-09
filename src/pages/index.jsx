// Libraries
import React from "react"
import { Route, Routes } from "react-router-dom"
// Pages
import MainPage from "./mainPage"
import CsvPage from "./csvPage"

const Pages = () => {
	return (
		<>
			<Routes>
				<Route index element={<MainPage />} />
				<Route path={"inspector"} element={<CsvPage />} />
			</Routes>
		</>
	)
}

export default Pages
