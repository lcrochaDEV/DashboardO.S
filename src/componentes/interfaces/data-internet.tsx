import { UseQueryOptions, QueryKey } from '@tanstack/react-query';


interface DataItensSend {
    host?: string 
    port?: number 
    user?: string
    password?: string
    commands?: object
}

export interface headersDataBudy {
    dataheader?: DataItensSend;
} 

export interface FetchQueryOptions<T = unknown> {
    queryKey: QueryKey;
    options?: Omit<UseQueryOptions<T, Error>, 'queryFn' | 'queryKey' | 'enable'>;
    enabled?: boolean;
    refetchOnWindowFocus?: boolean;
}

export interface ItensResponse {
    id: number
    Address: string
    HWaddress: string
    Gateway: string
    Local: true,
    ShortHostname: string
    FullHostnameFQDN: string
    img: string | string
    parent: []
}
export interface ItensVesionsSysyem {
    BuildDate: string
    FirmwareVersion: string
    HWSerialNumber: string
    MACAddress: string
    Manufacturer: string
    ManufacturerOUI: string
    ModelNumber: string
    SysUpTime: string
}

export interface RequestOptions {
method: 'GET' | 'POST' | 'PUT' | 'DELETE'; 
headers: Headers;
body?: string;
}