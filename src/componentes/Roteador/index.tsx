import styled from 'styled-components';
import ModemWifi from './modem-wifi-320x320.svg'

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


const Modem = () => {
    return(
        <Section>
            <IMG src={ModemWifi} alt="modem" />
            <p>Intelbras <span>ONT121W</span></p>
            <p>MAC: D8:77:8B:A6:91:38</p>
            <a href='#'><p>IP: 192.168.1.1</p></a>
        </Section>
    )
}

export default Modem;