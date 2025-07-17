export interface DataItensSend {
    host?: string 
    port?: number 
    user?: string
    password?: string
    commands?: object
}

export interface ItensResponse {
    id: number
    Address: string
    HWaddress: string
    Gateway: string
    Local: true,
    ShortHostname: string
    FullHostnameFQDN: string
    img: string
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