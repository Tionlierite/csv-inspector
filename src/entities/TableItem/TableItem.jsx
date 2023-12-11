export const TableItem = ({ name, phone, email, bday, address }) => {
	return (
		<tr className='border-b'>
			<td className='p-2'>{name}</td>
			<td>{phone}</td>
			<td>{email}</td>
			<td>{bday}</td>
			<td>{address}</td>
		</tr>
	)
}
