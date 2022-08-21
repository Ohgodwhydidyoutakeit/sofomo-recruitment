import { ICheckApiResponse } from "./CheckApiResponseInterface";



export interface IIpApiReponseInterface extends ICheckApiResponse {
    time_zone: ITime_zone;
    currenct: ICurrency;
    connecton: IConnection
}

interface ITime_zone {
    id: string,
    current_time: string,
    gmt_offset: number;
    code: string;
    is_daylight_saving: boolean
}

interface ICurrency {
    code: string;
    name: string;
    plural: string;
    symbol: string;
    symbol_native: string;
}

interface IConnection {
    asn: number;
    isp: string;
}