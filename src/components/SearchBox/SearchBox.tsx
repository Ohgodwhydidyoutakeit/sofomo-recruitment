

import { FC } from 'react'
import './SearchBox.scss'


interface ISearchProps {
    placeholder?: string
}
export const SearchBox: FC<ISearchProps> = ({ placeholder }: ISearchProps) => {
    return (
        <input type="text" placeholder={placeholder || "search box"} />
    )
}