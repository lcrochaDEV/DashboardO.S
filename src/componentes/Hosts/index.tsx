import styled from 'styled-components';
import ModemWifi from './modem-wifi-320x320.svg'
import cpu from './cpu.svg'
import { Link } from 'react-router-dom';

const Section = styled.section`
    color: #00ff40;
    text-align: center;
    font-size: 11px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
    text-transform: uppercase;*/
`;  
const IMG = styled.img`
    width: 70px;
`;

interface Props {
    id?: number | undefined
    name?: string | undefined
    modelo?: string | undefined
    macaddress?: string | undefined
    ipaddress?: string | undefined
}

const Hosts: React.FC <Props> = ({id, name, modelo, macaddress, ipaddress}: Props) => {
    return(
        <>
            {!id
            ?
                <Section>
                    <Link to={'/modem'}>
                        <IMG src={ModemWifi} alt="modem" />
                        <p>{name} <span>{modelo}</span></p>
                        <p>MAC: {macaddress}</p>
                        <p>IP: {ipaddress}</p>
                    </Link>
                </Section>    
            :
                <Section>
                    <Link to={'/hosts'}>
                        <IMG src={cpu} alt="cpu" />
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