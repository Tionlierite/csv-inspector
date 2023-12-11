// Libraries
import React from "react"
// Widgets
import { TableOfContents } from "../../widgets/TableOfContents"
// Features
import { ReturnToMainPageButton } from "../../features/ReturnToMainPageButton"

const CsvPage = () => {
	return (
		<div className='inspector-page flex flex-col items-end'>
			<ReturnToMainPageButton />
			<TableOfContents />
		</div>
	)
}

export default CsvPage
