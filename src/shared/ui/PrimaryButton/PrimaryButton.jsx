import React from "react"

export const PrimaryButton = ({
	id,
	styles,
	content,
	handleClickFunction,
	children
}) => {
	return (
		<>
			<button id={id} className={styles} onClick={handleClickFunction}>
				{content}
			</button>
			{children}
		</>
	)
}
