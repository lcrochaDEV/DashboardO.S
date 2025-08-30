import { styled } from "styled-components";
import { ItensResponse, ItensVesionsSysyem } from "../interfaces/data-internet";
import { useFetchData } from "../hooks/useFetch";
import { useLocalStorge } from "../hooks/useLocalStorage";
import { useEffect, useState } from "react";
import Hosts from "../Hosts";
import Loading from "../Loadding";


const HostList = styled.section`
    display: flex;
    position: fixed;
    left: 10px;
`;

const Loading_Div = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    min-height: 79vh !important;
    font-family: 'Orbitron', sans-serif;
    font-size: 17px;
    color: aliceblue;
    font-weight: bold;
    
`;
const URLFETCH = 'http://localhost:8000/gw/ont121w';

interface Props {
    id: string | number | undefined;
}

const NetworkGraph: React.FC<Props> = ({ id }) => {
    const [ {}, getstorage ] = useLocalStorge({});
    const [ hostdata, setHostdata] = useState(getstorage.find(itens => itens.id === id))

    useEffect(() => {
        setHostdata(getstorage.find(itens => itens.id === id));
    }, [id]);

    const { data:isArpData, isLoading:isLoadingArp, isError:isErrorArp } = useFetchData<ItensVesionsSysyem>(URLFETCH, {
            dataheader: {
                "host": "192.168.1.1",
                "port": 23,
                "user": "admin",
                "password": "intelbras",
                "commands": ["show system version"]
            },
        }, {
            queryKey: ['isArpData', 'isArpCacheData'],
        });

    const { data:isHostData } = useFetchData<ItensResponse[]>(URLFETCH, {
            dataheader: {
                "host": "192.168.1.1",
                "port": 23,
                "user": "admin",
                "password": "intelbras",
                "commands": [ 
                    "arp -n -v",
                    "cat /tmp/hosts"
                ]
            },
        }, {
            queryKey: ['isHostData', 'isHostCacheData'],
            enabled: !!isArpData?.ModelNumber,
        });

    // Use a propriedade isLoading de cada resultado para verificar o carregamento
    if (isLoadingArp) {
        return <Loading_Div><Loading/></Loading_Div>
    }
    // Use a propriedade isError de cada resultado para verificar erros
    if (isErrorArp) {
        return <Loading_Div><p>Erro ao carregar!</p></Loading_Div>;
    }

    return(
        <>
        
            <HostList> 
                <>
                    <Hosts
                        id={hostdata?.id}   
                        name={hostdata?.marca} 
                        modelo={isArpData?.ModelNumber} 
                        macaddress={isArpData?.MACAddress} 
                        ipaddress={hostdata?.ip}
                    />
                    {isHostData?.map(host => (
                        <Hosts 
                            key={host?.id}
                            uuid={host?.id}
                            name={host?.FullHostnameFQDN} 
                            modelo={host?.ShortHostname} 
                            macaddress={host?.HWaddress} 
                            ipaddress={host?.Address}
                        />
                    ))}
                </>
            </HostList>
        </>
    )
}

export default NetworkGraph;