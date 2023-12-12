// Libraries
import React from "react"
// Utils
import csvParser from "./csvParser"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
// Shared
import { PrimaryButton } from "../../shared/ui/PrimaryButton"
// Actions
import {
	addTableOfContents,
	resetValues
} from "../../app/providers/store/reducers/tableOfContentsReducer"
import { changeValueToOpposite } from "../../app/providers/store/reducers/csvStateReducer"
import {
	setErrorMessage,
	showNotification
} from "../../app/providers/store/reducers/notificationReducer"

export const ChooseFileButton = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const localstorageState = useSelector(
		state => state.stateOfLocalstorage.stateOfLocalstorage
	)

	const handleClick = () => {
		if (localstorageState) {
			localStorage.clear()
			dispatch(changeValueToOpposite())
			dispatch(resetValues())
		}
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
			dispatch(showNotification())
			event.target.value = ""
			return
		}

		try {
			const result = await csvParser(fileData)
			const serializedData = JSON.stringify(result)

			localStorage.setItem("contents", serializedData)
		} catch (error) {
			console.log(error)
			await csvParser(fileData, "UTF-8")
		}

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
