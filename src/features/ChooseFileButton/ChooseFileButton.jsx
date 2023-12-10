// Libraries
import React from "react"
// Shared
import { PrimaryButton } from "../../shared/ui/PrimaryButton"

export const ChooseFileButton = () => {
	return (
		<PrimaryButton
			id='input-file-button'
			styles='rounded bg-[#6346B4] px-12 py-2 text-base text-white hover:bg-[#A88EF0] active:bg-[#311F63]'
			content='Выберите файл'
		/>
	)
}
