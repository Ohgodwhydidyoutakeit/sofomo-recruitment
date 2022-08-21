
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setError } from '../../redux/appSlice'
import './Button.scss'


interface IButtonProps {
    text?: string
}
export const Button: FC<IButtonProps> = ({ text }: IButtonProps) => {

    const dispatch = useDispatch();

    const makeRequest = () => {
        dispatch(setError())
    }

    return (
        <button onClick={makeRequest}> {text || "search"}</button>
    )

}