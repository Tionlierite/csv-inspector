// Libraries
import React from "react"
// Utils
import csvParser from "./csvParser.js"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
// Shared
import { PrimaryButton } from "../../shared/ui/PrimaryButton"
// Actions
import { addTableOfContents } from "../../app/providers/store/reducers/tableOfContentsReducer.js"
import { changeValueToOpposite } from "../../app/providers/store/reducers/csvStateReducer.js"
import { setErrorMessage } from "../../app/providers/store/reducers/notificationReducer.js"

export const ChooseFileButton = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const localstorageState = useSelector(
		state => state.stateOfLocalstorage.stateOfLocalstorage
	)

	const handleClick = () => {
		document.querySelector(".input-file-field").click()
	}

	async function handleChange(event) {
		const fileData = event.target.files[0]

		if (!fileData || !fileData.name.endsWith(".csv")) {
			dispatch(
				setErrorMessage(
					"Неправильный формат файла, разрешены только файлы .CSV"
				)
			)
			event.target.value = ""
			return
		}

		await csvParser(fileData)

		handleStorageUpdate(JSON.parse(localStorage.getItem("contents")))
		if (!localstorageState) handleStorageStateUpdate()
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
