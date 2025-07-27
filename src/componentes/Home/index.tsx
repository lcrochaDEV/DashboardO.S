import { styled } from "styled-components";
import { ItensVesionsSysyem, ItensResponse } from "../interfaces/data-internet";
import { useFetchData } from "../hooks/useFetch";
import Hosts from "../Hosts";
import Loading from "../Loadding";
import Engrenagem from "../Engrenagem/Cadastro";
import { useEffect, useState } from "react";

const HomePage = styled.section`
    display: flex;
    position: fixed;
    left: 100px;
    top: 100px;
`;
const Flut = styled.div`
    position: fixed;
    right: 0;
    top: 0;
`;
const Loading_Div = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    min-height: 79vh !important;
`;
const URLFETCH = 'http://localhost:8000/gw/ont121w';
const Home: React.FC = () => {
    const [isenabled, setIsenabled] = useState<ItensVesionsSysyem>();

    const [ arpQuery, hostsQuery ] = useFetchData([
        {
            url: URLFETCH,
            queryKey: ['arp'],
            dataheader: {
                "host": "192.168.1.1",
                "port": 23,
                "user": "admin",
                "password": "intelbras",
                "commands": ["show system version"]
            },
        },
        {
            url: URLFETCH,
            queryKey: ['hosts'],
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
            enabled: !!isenabled,
        }
    ]);
    useEffect(() => {   
        setIsenabled(arpQuery.data?.ModelNumber);
    }, []); 
    console.log(isenabled)
    // Use a propriedade isLoading de cada resultado para verificar o carregamento
    if (arpQuery.isLoading) {
        return <Loading_Div><Loading/></Loading_Div>
    }
    // Use a propriedade isError de cada resultado para verificar erros
    if (arpQuery.isError) {
        return <Loading_Div><p>Erro ao carregar!</p></Loading_Div>;
    }

    const arp = arpQuery.data as ItensVesionsSysyem
    const hosts = hostsQuery.data as ItensResponse
     
    return(
        <>
            <HomePage>
                {!hosts
                ? 
                    <Hosts key={1} name="Intelbras" modelo={arp.ModelNumber} macaddress={arp?.MACAddress} ipaddress={"192.168.1.1"}/>
                :
                    <Hosts key={1} name={hosts?.FullHostnameFQDN} modelo={hosts?.ShortHostname} macaddress={hosts?.HWaddress} ipaddress={hosts?.Address}/>
                }
            </HomePage>
            <Flut>
                <Engrenagem/>
            </Flut>
        </>

    );

}

export default Home;

/**
 {!hosts.map(hosts => hosts.id) 
                ? 
                    arp.map(arp => (
                        <Hosts key={1} name="Intelbras" modelo={arp.ModelNumber} macaddress={arp?.MACAddress} ipaddress={"192.168.1.1"}/>
                    ))
                : 
                    hosts.map(hosts => (
                        <Hosts key={1} name="Intelbras" modelo={hosts?.ShortHostname} macaddress={hosts?.Address} ipaddress={"192.168.1.1"}/>
                    ))
                } 
 */