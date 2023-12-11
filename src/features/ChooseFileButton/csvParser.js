import Papa from "papaparse"

export const csvParser = fileData => {
	Papa.parse(fileData, {
		complete: result => {
			const serializedData = JSON.stringify(result.data)

			localStorage.setItem("contents", serializedData)
		},
		header: true,
		skipEmptyLines: true,
		encoding: "Windows-1251", // Given .csv file was in Windows-1251 Encoding instead of UTF-8
		error: error => {
			// TODO: Handle error with notification
		}
	}) // TODO: Try to handle situation with completed parsing but with incorrect characters with different encoding
}

export default csvParser
