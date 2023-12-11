// Libraries
import React from "react"
// Shared
import { InputFileLayout } from "../../shared/layouts/InputFileLayout"
// Features
import { ChooseFileButton } from "../../features/ChooseFileButton"

export const InputFileWidget = () => {
	return (
		<>
			<InputFileLayout>
				<label className='mb-20 block text-2xl'>
					Выберите файл в формате CSV
				</label>
				<ChooseFileButton />
			</InputFileLayout>
		</>
	)
}
