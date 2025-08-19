import React, { useState } from "react";
import styled from "styled-components";
import { useLocalStorge } from '../../hooks/useLocalStorage';


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
const Lista = styled.table`
    border-top: 1px solid;
    border-color: rgba(255, 255, 255, 0.3);
    margin-top: 15px;
    font-size: 13px;
    text-align: left;
`;
const Delete = styled.span`
    font-size: 20px;
    color: aliceblue;
`;
const Edit = styled.span`
    font-size: 20px;
    color: aliceblue;
`;

const Forms = () => {
    //INPUTS
    const [ id, setId  ] = useState<string | number | null | undefined>(null);
    const [ ip, setIp  ] = useState<string | false | undefined>(false);
    const [ macaddress, setMacaddress   ] = useState<string | undefined>('');
    const [ marca, setMarca ] = useState<string | false | undefined>(false);

    //TAGS
    const [ mode, setModes ] = useState<string | false | undefined>('delete');
    const [ textBtn, seTextBtn ] = useState<string | false | undefined>('Cadastrar');
    const [ actionBtnReturn, setActionBtnReturn ] = useState<string>('');
    
    const [ { poststorage, editestorage, deletestorage }, getstorage ] = useLocalStorge({ marca: marca || false, ip: ip || false, macaddress: macaddress });

    const submitForme = (event: React.FormEvent) => {
        event.preventDefault();
        if (!id) {
            poststorage()
            setIp('')
            setMacaddress('')
            setMarca('')
        }else{
            editestorage(id)
            setIp('')
            setMacaddress('')
            setMarca('')
        }
    }
    
    const handleDelete = (id : string | number | null) => {
       deletestorage(id);
    }

    const handleEdit = (id: string | number | null) => {
        let buscarData = getstorage.find(itens => itens.id === id);
        setId(buscarData?.id)
        setIp(buscarData?.ip);
        setMacaddress(buscarData?.macaddress);
        setMarca(buscarData?.marca);
        setModes('');
        seTextBtn('Editar');
        setActionBtnReturn('arrow_back_ios_new');
    };
    
    const handleReturn = () => {
        setIp('')
        setMacaddress('')
        setMarca('')
        seTextBtn('Cadastrar');
        setModes('delete');
        setActionBtnReturn('');
    }

    return (
    <Conteiner>
        <Formulario>
            <a href="#" className="material-symbols-outlined" onClick={() => handleReturn()}>{actionBtnReturn}</a>
            <h2>Cadastro de Dispositivo</h2>
            <Form action="#" onSubmit={submitForme}>
                <label htmlFor="ip_address">Endereço IP:</label>
                <input type="text" value={ip === false ? '' : ip} onChange={ip => setIp(ip.target.value)} id="ip_address" name="ip_address" placeholder="Ex: 192.168.1.1" pattern="^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$" title="Digite um endereço IP válido (Ex: 192.168.1.1)" required />

                <label htmlFor="mac_address">Endereço MAC:</label>
                <input type="text" value={macaddress} onChange={macaddress => setMacaddress(macaddress.target.value)} id="mac_address" name="mac_address" placeholder="Ex: 00:1A:2B:3C:4D:5E" pattern="^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$" title="Digite um endereço MAC válido (Ex: 00:1A:2B:3C:4D:5E ou 00-1A-2B-3C-4D-5E)" />

                <label htmlFor="brand">Marca do Dispositivo:</label>
                <input type="text" value={marca === false ? '' : marca} onChange={marca => setMarca(marca.target.value)} id="brand" name="brand" placeholder="Ex: Cisco, TP-Link, Samsung" required />

                <button type="submit">{textBtn}</button>
            </Form>
            <Lista>
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th>IP</th>
                        <th>Endereço Mac</th>
                    </tr>
                </thead>
                <tbody> 
                    {getstorage.map(itens =>      
                        <tr key={itens.id}>
                            <td>{itens.marca}</td>
                            <td>{itens.ip}</td>
                            <td>{itens.macaddress}</td>
                            <td><a href="#" onClick={() => handleDelete(itens.id)}><Delete className="material-symbols-outlined" data-id={itens.id}>{mode}</Delete></a></td>
                            <td><a href="#" onClick={() => handleEdit(itens.id)}><Edit className="material-symbols-outlined">edit</Edit></a></td>
                        </tr>
                    )}
                </tbody>
            </Lista>
        </Formulario>
    </Conteiner>

    );
};

export default Forms;