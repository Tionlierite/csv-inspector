// Libraries
import React from "react"
import { Route, Routes } from "react-router-dom"
// Pages
import MainPage from "./MainPage/MainPage.jsx"
import CsvPage from "./CsvPage/CsvPage.jsx"

const Pages = () => {
	return (
		<Routes>
			<Route index element={<MainPage />} />
			<Route path={"inspector"} element={<CsvPage />} />
		</Routes>
	)
}

export default Pages
