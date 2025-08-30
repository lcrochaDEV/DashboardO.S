import styled from 'styled-components';
import { Link } from 'react-router-dom';


const UL = styled.ul`
    width: 100%;
    background-color: #fff;
    background: rgba(2, 2, 2, 0.2);
    display: flex;
    justify-content: flex-start;
    color: #000;
`;
const A = styled(Link)`
    padding: 15px 10px;
    font-size: 20px;
    display: inline-block;
    text-decoration: none;
    color:  #ffffff;
    &::after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background: #ffffff;
        background-image: linear-gradient(to left, rgba(255,0,0,0), #ffffff);
        transition: width .4s ease-in;
        position: relative;
        top: 20px;
        transform: scale(1.1);
        transition: all 0.9s;
    }

    &:hover::after {
        width: 100%;
    } 
`;

const Header = () => {

    return(
        <UL>
            <li><A to={'/'}>Home</A></li>
            <li><A to={'/mapa'}>Mapa</A></li>
            <li><A to={'/raspberrypi'}>RaspBerryPI</A></li>
        </UL>
    )
} 
export default Header;
