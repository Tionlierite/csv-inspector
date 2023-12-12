// Libraries
import React from "react"

export const TableItem = ({ name, phone, email, bday, address }) => {
	return (
		<tr className='table-row-item border-b'>
			<td className='p-2'>{name}</td>
			<td className='p-2'>{phone}</td>
			<td className='p-2'>{email}</td>
			<td className='p-2'>{bday}</td>
			<td className='p-2'>{address}</td>
		</tr>
	)
}
