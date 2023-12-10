import React from "react"

export const PrimaryButton = ({ id, styles, content }) => {
	return (
		<button id={id} className={styles}>
			{content}
		</button>
	)
}
