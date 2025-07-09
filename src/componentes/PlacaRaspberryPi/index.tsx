import styled from 'styled-components';
import PlacaRsp from './raspberry-pi-3.png'

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


const PlacaRaspberryPi = () => {
    return(
        <Section>
            <IMG src={PlacaRsp} alt="RaspberryPi" />
            <p>Raspabian O.S <span></span></p>
            <p></p>
            <p></p>
        </Section>
    )
}

export default PlacaRaspberryPi;