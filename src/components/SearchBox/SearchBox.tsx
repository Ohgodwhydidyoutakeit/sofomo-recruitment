

import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { checkUrl } from '../../redux/appSlice'
import './SearchBox.scss'


interface ISearchProps {
    placeholder?: string
}
export const SearchBox: FC<ISearchProps> = ({ placeholder }: ISearchProps) => {
    // we should check the url before 
    const dispatch = useDispatch();
    return (
        <input type="text" placeholder={placeholder || "search box"} 
            
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(checkUrl(e.target.value))
            }}
        />
    )
}