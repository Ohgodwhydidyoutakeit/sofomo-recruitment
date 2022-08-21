import { FC } from "react";
import { closeError } from "../../redux/appSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";


import './Error.scss'
export const Error: FC = () => {

    const { errorMessage } = useAppSelector(state => state.appSlice)
    const dispatch = useAppDispatch()
    return (<div className="error-container">
        {errorMessage}
        <button onClick={()=>dispatch(closeError())}>X</button>
    </div>)
}