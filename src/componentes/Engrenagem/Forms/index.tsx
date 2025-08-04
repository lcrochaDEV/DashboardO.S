import { useState } from "react";
import styled from "styled-components";
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

const Forms = () => {
    const [ip, setIp] = useState<string>('')
    const [mac, setMac] = useState<string>('')
    const [model, setModel] = useState<string>('')

    return (
    <Conteiner>
        <Formulario>
            <h2>Cadastro de Dispositivo</h2>
            <Form action="#" method="POST">
                <label htmlFor="ip_address">Endereço IP:</label>
                <input type="text" value={ip} onChange={ip => setIp(ip.target.value)} id="ip_address" name="ip_address" placeholder="Ex: 192.168.1.1" pattern="^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$" title="Digite um endereço IP válido (Ex: 192.168.1.1)" required />

                <label htmlFor="mac_address">Endereço MAC:</label>
                <input type="text" value={mac} onChange={mac => setMac(mac.target.value)} id="mac_address" name="mac_address" placeholder="Ex: 00:1A:2B:3C:4D:5E" pattern="^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$" title="Digite um endereço MAC válido (Ex: 00:1A:2B:3C:4D:5E ou 00-1A-2B-3C-4D-5E)" />

                <label htmlFor="brand">Marca do Dispositivo:</label>
                <input type="text" value={model} onChange={model => setModel(model.target.value)} id="brand" name="brand" placeholder="Ex: Cisco, TP-Link, Samsung" required />

                <input type="submit" value="Cadastrar" />
            </Form>
        </Formulario>
    </Conteiner>

    );
};

export default Forms;