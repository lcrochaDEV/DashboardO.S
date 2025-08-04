import { styled } from "styled-components";
import { ItensResponse, ItensVesionsSysyem } from "../interfaces/data-internet";
import { useFetchData } from "../hooks/useFetch";
import Hosts from "../Hosts";
import Loading from "../Loadding";
import Engrenagem from "../Engrenagem/Cadastro";



const HomePage = styled.section`
    display: flex;
    position: fixed;
    left: 10px;
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
    font-family: 'Orbitron', sans-serif;
    font-size: 17px;
    color: aliceblue;
    font-weight: bold;
`;
const URLFETCH = 'http://localhost:8000/gw/ont121w';

const Home: React.FC = () => {
    const { data:isArpData, isLoading:isLoadingArp, isError:isErrorArp } = useFetchData<ItensVesionsSysyem>(URLFETCH, {
            dataheader: {
                "host": "192.168.1.1",
                "port": 23,
                "user": "admin",
                "password": "intelbras",
                "commands": ["show system version"]
            },
        }, {
            queryKey: ['isArpData'],
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
            queryKey: ['isHostData'],
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
            <HomePage> 
                <>
                    <Hosts
                        name="Intelbras" 
                        modelo={isArpData?.ModelNumber} 
                        macaddress={isArpData?.MACAddress} 
                        ipaddress={"192.168.1.1"}
                    />
                    {isHostData?.map(host => (
                        <Hosts 
                            key={host?.id}
                            id={host?.id}
                            name={host?.FullHostnameFQDN} 
                            modelo={host?.ShortHostname} 
                            macaddress={host?.HWaddress} 
                            ipaddress={host?.Address}
                        />
                    ))}
                </>
            </HomePage>
            <Flut>
                <Engrenagem/>
            </Flut>
        </>

    );

}

export default Home;

/*
                     {isHostData?.map(isHostData => {
                        <Hosts key={isHostData?.id} name={isHostData?.FullHostnameFQDN} modelo={isHostData?.ShortHostname} macaddress={isHostData?.HWaddress} ipaddress={isHostData?.Address}/>
                    })}
 */