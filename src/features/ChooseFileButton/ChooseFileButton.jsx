// Libraries
import React, { useEffect } from "react"
// Utils
import csvParser from "./csvParser.js"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
// Shared
import { PrimaryButton } from "../../shared/ui/PrimaryButton"
// Actions
import { addTableOfContents } from "../../app/providers/store/reducers/tableOfContentsReducer.js"
import { changeValueToOpposite } from "../../app/providers/store/reducers/csvStateReducer.js"

export const ChooseFileButton = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		document.querySelector(".input-file-field").click()
	}

	async function handleChange(event) {
		const fileData = event.target.files[0]

		if (!fileData || !fileData.name.endsWith(".csv")) return console.log("Nah") // TODO: Notification

		await csvParser(fileData)

		handleStorageUpdate(JSON.parse(localStorage.getItem("contents")))
		handleStorageStateUpdate()

		navigate("inspector")
	}

	const handleStorageUpdate = content => {
		dispatch(addTableOfContents(content))
	}

	const handleStorageStateUpdate = () => {
		dispatch(changeValueToOpposite())
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
