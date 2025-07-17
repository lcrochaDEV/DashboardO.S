import styled from 'styled-components';

const IMG = styled.img`
    width: 40px;
`;
import EngrenagemImg from './gce-systems-management-svgrepo-com.svg'

const Engrenagem = () => {
    return(
        <a href={'#'}><IMG src={EngrenagemImg} alt="Engrenagem" /></a>
    )
}
export default Engrenagem;