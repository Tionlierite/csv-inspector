// Libraries
import React from "react"
// Utils
import { ProtectedRoute } from "./CsvPage/ProtectedRoute"
import { Route, Routes } from "react-router-dom"
// Pages
import MainPage from "./MainPage/MainPage"
import CsvPage from "./CsvPage/CsvPage"

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
