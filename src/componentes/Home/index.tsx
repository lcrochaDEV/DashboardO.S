import { styled } from "styled-components";
import Hosts from "../Hosts";
import Engrenagem from "../cadastrar/Formulario";
import { ItensVesionsSysyem } from "../interfaces/data-internet";
import { useFetchData } from "../hooks/useFetch";

const HomePage = styled.section`
    display: flex;
    position: fixed;
    left: 100px;
    top: 100px;
`;
const Flut = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`;
const Home: React.FC = () => {

    const { data } = useFetchData<ItensVesionsSysyem>('http://localhost:8000/gw/ont121w', {
            "host": "192.168.1.1",
            "port": 23,
            "user": "admin",
            "password": "intelbras",
            "commands": ["show system version"]
        });

/*
    const { data, isLoading, error, refetch } = useQuery<ItensVesionsSysyem>({queryKey:['receivedKey'],
        queryFn: async() => {
            const response = await fetch('http://localhost:8000/gw/ont121w', {
            method: 'POST',
                headers: new Headers({
                    "Authorization": "",
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }),
                body: JSON.stringify({
                    "host": "192.168.1.1",
                    "port": 23,
                    "user": "admin",
                    "password": "intelbras",
                    "commands": ["show system version"]
                }),            
            })      
            return response.json()
        }
    })
        */
    return(
        <>
            <HomePage>
                <Hosts name="Intelbras" modelo={data?.ModelNumber} macaddress={data?.MACAddress} ipaddress="192.168.1.1"/>
            </HomePage>
            <Flut>
                <Engrenagem/>
            </Flut>
        </>
    );

}

export default Home;
