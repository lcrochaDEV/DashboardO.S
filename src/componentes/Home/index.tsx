import Modem from "../Roteador";
import { styled } from "styled-components";
import Camera from "../CameraIP";
import PlacaRaspberryPi from "../PlacaRaspberryPi";




const HomePage = styled.section`
    display: flex;
    position: fixed;
    left: 100px;
    top: 100px;
`;

const Home = () => {
    return(
        <HomePage>
            <Modem/>
            <Camera/>
            <PlacaRaspberryPi/>
        </HomePage>
    );

}

export default Home;