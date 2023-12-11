// Libraries
import React from "react"
import Papa from "papaparse"
// Shared
import { PrimaryButton } from "../../shared/ui/PrimaryButton"

export const ChooseFileButton = () => {
	const handleClick = () => {
		document.querySelector(".input-file-field").click()
	}
	const handleChange = event => {
		const fileData = event.target.files[0]

		if (!fileData || !fileData.name.endsWith(".csv")) return console.log("Nah") // TODO: Notification

		Papa.parse(fileData, {
			complete: result => {
				console.log(result.data)
			},
			header: true,
			skipEmptyLines: true,
			encoding: "Windows-1251", // Given .csv file was in Windows-1251 Encoding instead of UTF-8
			error: (error) => {
				// TODO: Handle error with notification
			}
		}) // TODO: Try to handle situation with completed parsing but with incorrect characters with different encoding
	}
	return (
		<PrimaryButton
			id='input-file-button'
			styles='rounded bg-[#6346B4] px-12 py-2 text-base text-white hover:bg-[#A88EF0] active:bg-[#311F63]'
			content='Выберите файл'
			handleClickFunction={handleClick}
		>
			<input
				type='file'
				accept='.csv'
				className='input-file-field'
				hidden
				onChange={handleChange}
			/>
		</PrimaryButton>
	)
}
