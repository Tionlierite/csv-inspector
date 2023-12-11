// Utils
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
// Shared
import { PrimaryButton } from "../../shared/ui/PrimaryButton"
// Actions
import { resetValues } from "../../app/providers/store/reducers/tableOfContentsReducer.js"
import { changeValueToOpposite } from "../../app/providers/store/reducers/csvStateReducer.js"

export const ReturnToMainPageButton = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		localStorage.clear()
		dispatch(resetValues())
		dispatch(changeValueToOpposite())
		navigate("/", { replace: true })
	}
	return (
		<PrimaryButton
			id='return-to-main-button'
			styles='rounded bg-[#6346B4] my-4 mr-4 px-12 py-2 text-xs text-white hover:bg-[#A88EF0] active:bg-[#311F63]'
			content='Загрузить новый файл'
			handleClickFunction={handleClick}
		></PrimaryButton>
	)
}
