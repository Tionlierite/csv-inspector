// Libraries
import React from "react"
import _ from "lodash"
// Utils
import { useSelector } from "react-redux"
// Entities
import { TableItem } from "../../entities/TableItem"

export const TableOfContents = () => {
	const tableOfContents = useSelector(
		state => state.tableOfContents.tableOfContents
	)

	return (
		<table className='table-of-contents overflow-hidden rounded-l-lg bg-white p-4 leading-normal shadow-lg'>
			<thead>
				<tr className='border-b-2 text-left'>
					<th
						scope='col'
						className='border-r px-4 py-2 font-normal last:border-r-0'
					>
						Имя
					</th>
					<th
						scope='col'
						className='border-r px-4 py-2 font-normal last:border-r-0'
					>
						Номер телефона
					</th>
					<th
						scope='col'
						className='border-r px-4 py-2 font-normal last:border-r-0'
					>
						email
					</th>
					<th
						scope='col'
						className='border-r px-4 py-2 font-normal last:border-r-0'
					>
						Дата Рождения
					</th>
					<th
						scope='col'
						className='border-r px-4 py-2 font-normal last:border-r-0'
					>
						Адрес
					</th>
				</tr>
			</thead>
			<tbody>
				{tableOfContents.map(item => (
					<TableItem key={_.uniqueId("table-item-")} {...item} />
				))}
			</tbody>
		</table>
	)
}
