import { useEffect, useState } from "react";
import styled from "styled-components";
import cpu from '../../Hosts/cpu.svg'
import { useLocalStorge } from "../../hooks/useLocalStorage";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const Conteiner = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    color: aliceblue;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif, sans-serif; /* Exemplo de fonte */
`;
const Formulario = styled.div`
    box-shadow: 1px 1px  8px #5dd1d1;
    border-radius: 9px;
    background-color: #161616;
    display: flex;
    flex-direction:column; 
    justify-content: center;
    padding: 30px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top:10px;
`;
const IMG = styled.img`
    width: 50px;
`;
const Lista = styled.table`
    border-top: 1px solid;
    border-color: rgba(255, 255, 255, 0.3);
    margin-top: 15px;
    font-size: 13px;
    text-align: left;
`;
interface ModelHost {
    id?: number | string | undefined
    FullHostnameFQDN?: string | undefined
    ShortHostname?: string | undefined
    HWaddress?: string | undefined
    Address?: string | undefined
}

const Forms: React.FC = () => {
    const { hostId } = useParams();
    //BUSCAR DADOS DE REQUISIÇÃO EM CACHE TANSTACK QUERY
    const queryClient = useQueryClient();
    const isUserData = queryClient.getQueryData<ModelHost[]>(['isHostData', 'isHostCacheData']);
    const [ data, setData ] = useState<ModelHost>(isUserData?.find(itens => itens.id === Number(hostId)) as ModelHost)
    useEffect(() => {
        setData(isUserData?.find(itens => itens.id === Number(hostId)) as ModelHost);
    }, [data]);
    //IMG
    const [ url, setUrl ] = useState<string | undefined>();
    const eventInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => { 
        setUrl(event.target.value)
    }
    //INPUTS
    const [ id, setId  ] = useState<string | number | null | undefined>(null);
    const [ key, setKey ] = useState<string>('hosts');
    const [ marca, setMarca ] = useState<string | undefined>('');
    const [ ip, setIp ] = useState<string | undefined>('');
    const [ macaddress, setMacaddress ] = useState<string | undefined>(data.HWaddress); 
 
    //TAGS
    const [ textBtn, seTextBtn ] = useState<string | false | undefined>('Cadastrar');

    const [ { poststorage, deletestorage }, getstorage ] = useLocalStorge({key: key, marca: marca || undefined, ip: ip || undefined, macaddress: macaddress });

    const submitForme = (event: React.FormEvent) => {
        event.preventDefault();
        if (!id) {
            poststorage()
            setIp('')
            setMacaddress('')
            setMarca('')
        }
    }
    const handleDelete = (id: string | number | null) => {
        deletestorage(id);
    }
    return(
        <Conteiner>
            <Formulario>
                <a href="#" className="material-symbols-outlined"></a>
                <h2>Cadastrar Host</h2>
                <Form action="#" onSubmit={submitForme}>
                    <IMG src={url ?? cpu} alt="cpu"/>
                    <label htmlFor="image-upload">URL:</label>
                    <input type="text" onChange={(eventInput)} placeholder="Ex: http://localhost/"/>

                    <label htmlFor="mac_address">Endereço MAC:</label>
                    <input type="text" value={macaddress} onChange={macaddress => setMacaddress(macaddress.target.value)} id="mac_address" name="mac_address" placeholder="Ex: 00:1A:2B:3C:4D:5E" pattern="^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$" title="Digite um endereço MAC válido (Ex: 00:1A:2B:3C:4D:5E ou 00-1A-2B-3C-4D-5E)" />

                    <label htmlFor="brand">Marca do Dispositivo:</label>
                    <input type="text" value={marca === undefined ? '' : marca} onChange={marca => setMarca(marca.target.value)} id="brand" name="brand" placeholder="Ex: Cisco, TP-Link, Samsung" required />

                    <button type="submit">{textBtn}</button>
                </Form>
            <Lista>
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th>Endereço Mac</th>
                    </tr>
                </thead>
                <tbody> 
 
                </tbody>
            </Lista>
            </Formulario>
        </Conteiner>
    );

}

export default Forms;
//https://logodownload.org/wp-content/uploads/2018/02/raspberry-pi-logo.png