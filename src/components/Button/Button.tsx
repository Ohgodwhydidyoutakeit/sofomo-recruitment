
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { axiosCallToApi, setError } from '../../redux/appSlice'
import './Button.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

interface IButtonProps {
    text?: string
}
export const Button: FC<IButtonProps> = ({ text }: IButtonProps) => {

    const dispatch = useAppDispatch();
    const { urlToCheck } = useAppSelector((state) => state.appSlice)
    const makeRequest = () => {
        dispatch(setError())
        dispatch(axiosCallToApi('134.201.250.155'))


    }

    return (
        <button onClick={makeRequest}> {text || "search"}</button>
    )

}