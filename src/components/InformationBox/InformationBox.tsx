

import { FC } from 'react'
import './InformationBox.scss'


interface IInformationBoxProps {
    userIp?: string
}

export const InformationBox: FC<IInformationBoxProps> = ({ userIp }: IInformationBoxProps) => {
    return (
        <div className='informationbox-container'>
            {userIp &&
                <p>UserIp: {userIp || "Cannot get user IP"}</p>

            }
        </div>
    )
}