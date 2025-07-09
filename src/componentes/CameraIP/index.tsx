import styled from 'styled-components';
import CameraIp from './camaraip.png'

const Section = styled.section`
    color: #00ff40;
    text-align: center;
    font-size: 12px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
`;  
const IMG = styled.img`
    width: 60px;
`;

const Camera = () => {
    return(
        <Section>
            <IMG src={CameraIp} alt="Camera" />
            <p>Camera <span>YCC365 PLUS</span></p>
            <p></p>
            <p>MAC: 60-FB-00-FC-02-34</p>
        </Section>
    )
}

export default Camera;