import styled from 'styled-components';
import ModemWifi from './cpu.svg'

const Section = styled.section`
    color: #00ff40;
    text-align: center;
    font-size: 12px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
`;  
const IMG = styled.img`
    width: 100px;
`;

interface Props {
    name?: string | undefined
    modelo?: string | undefined
    macaddress?: string | undefined
    ipaddress?: string | undefined
}

const Hosts: React.FC <Props> = ({name, modelo, macaddress, ipaddress}) => {
    return(
        <Section>
            <IMG src={ModemWifi} alt="modem" />
            <p>{name} <span>{modelo}</span></p>
            <p>MAC: {macaddress}</p>
            <a href='#'><p>IP: {ipaddress}</p></a>
        </Section>
    )
}

export default Hosts;