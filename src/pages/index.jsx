// Libraries
import React from "react"
import { Route, Routes } from "react-router-dom"
// Pages
import MainPage from "./MainPage/MainPage.jsx"
import CsvPage from "./CsvPage/CsvPage.jsx"
// Utils
import { ProtectedRoute } from "./CsvPage/ProtectedRoute.jsx"

const Pages = () => {
	return (
		<Routes>
			<Route index element={<MainPage />} />
			<Route
				path={"inspector"}
				element={
					<ProtectedRoute>
						<CsvPage />
					</ProtectedRoute>
				}
			/>
		</Routes>
	)
}

export default Pages
