import Papa from "papaparse"

export const csvParser = (fileData, encoding = "Windows-1251") => {
	return new Promise((resolve, reject) => {
		Papa.parse(fileData, {
			complete: result => {
				resolve(result.data)
			},
			header: true,
			skipEmptyLines: true,
			encoding: encoding, // Given .csv file was in Windows-1251 Encoding instead of UTF-8
			error: error => {
				reject(error)
				// TODO: Handle error with notification
			}
		}) // TODO: Try to handle situation with completed parsing but with incorrect characters with different encoding
	})
}

export default csvParser
