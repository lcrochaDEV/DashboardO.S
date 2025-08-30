import { styled } from "styled-components";
import Menu from "./Menu";
import Engrenagem from "../Engrenagem/Cadastro";


const Flut = styled.div`
    position: fixed;
    right: 0;
    top: 0;
`;
const Mapa: React.FC = () => {
  
    return(
        <>
            <Menu/>
             <Flut>
                <Engrenagem/>
            </Flut>
        </>
    );

}

export default Mapa;
