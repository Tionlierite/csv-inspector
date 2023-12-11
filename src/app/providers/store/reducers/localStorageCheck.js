export const localStorageCheck = () => {
	const serializedData = localStorage.getItem("contents")
	return serializedData ? JSON.parse(serializedData) : []
}
