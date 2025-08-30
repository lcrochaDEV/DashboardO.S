import styled from 'styled-components';
import ModemWifi from './modem-wifi-320x320.svg'
import cpu from './cpu.svg'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Section = styled.section`
    color: #00ff40;
    text-align: center;
    font-size: 11px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 7px;
`;  
const IMG = styled.img`
    width: 60px;
`;

interface Props {
    uuid?: number | undefined
    id?: number | string | undefined
    name?: string | undefined
    modelo?: string | undefined
    macaddress?: string | undefined
    ipaddress?: string | undefined
}

const Hosts: React.FC <Props> = ({ uuid, id, name, modelo, macaddress, ipaddress }: Props) => {
    const [ logo, setLogo ] = useState<string | undefined>();
  
    useEffect(() => {
       setLogo(undefined);
    }, []);

    return(
        <>
            {!uuid
            ?
            <Section>
                <Link to={'/modem'} >
                    <IMG src={ModemWifi} alt="modem" />
                    <p>{name} <span>{modelo}</span></p>
                    <p>MAC: {macaddress}</p>
                    <p>IP: {ipaddress}</p>
                </Link>
            </Section>    
            :
            <Section>
                <Link to={`/host/${uuid}`} data-id={uuid}>
                    <IMG src={logo ?? cpu} alt="cpu"/>
                    <p>{name} <span>{modelo}</span></p>
                    <p>MAC: {macaddress}</p>
                    <p>IP: {ipaddress}</p>
                </Link>
            </Section>
            }
        </>  
    )
}

export default Hosts;

/**
    <Section>
                 
 */