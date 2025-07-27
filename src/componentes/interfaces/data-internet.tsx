import { UseQueryOptions, QueryKey } from '@tanstack/react-query';

export interface RequestOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'; 
    headers: Headers;
    body?: string;
}

interface DataItensSend {
    host?: string 
    port?: number 
    user?: string
    password?: string
    commands?: object
}
export interface FetchQueryOptions<T = unknown> {
  url: string;
  queryKey: QueryKey;
  options?: Omit<UseQueryOptions<T, Error>, 'queryFn' | 'queryKey' | 'enable'>;
  dataheader?: DataItensSend;
  enabled?: boolean;
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

