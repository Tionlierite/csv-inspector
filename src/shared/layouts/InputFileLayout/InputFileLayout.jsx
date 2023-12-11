// Libraries
import React from "react"

export const InputFileLayout = ({ children }) => {
	return (
		<div className='input-file-container flex h-full max-h-96 w-full max-w-3xl flex-col items-center rounded-lg bg-white pb-24 pt-24 shadow-lg'>
			{children}
		</div>
	)
}
