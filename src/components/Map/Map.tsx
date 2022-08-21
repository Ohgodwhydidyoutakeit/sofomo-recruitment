

import { FC } from 'react'
import './Map.scss'
import GoogleMapReact from 'google-map-react'


interface IProps {
    text: string,
    lat: number,
    lng: number
}
interface IMapProps {
    latitude?: number;
    longitude?: number;
}
const AnyReactComponent = ({ text, lat, lng }: IProps) => <div>{text}</div>;

export const Map: FC<IMapProps> = ({ latitude, longitude }: IMapProps) => {
    const defaultProps = {
        center: {
            lat: 50.049683,
            lng: 19.944544
        },
        zoom: 11
    };
    return (

        <div className='map-container' >
            <GoogleMapReact
                // no key for now 
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={latitude || defaultProps.center.lat}
                    lng={longitude || defaultProps.center.lng}
                    text="HERE YOU ARE "
                />
            </GoogleMapReact>
        </div>
    )
}