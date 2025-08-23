import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocalStorge } from "..//../hooks/useLocalStorage";
import NetworkGraph from '../../NetworkGraph';
import { useEffect, useState } from 'react';
import NetworkPNG from './Network-PNG.png'

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
    font-size: 18px;
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
const IMG = styled.img`
    display: block;
    margin: 0 auto;
`;

const Menu: React.FC = () => {
    const [ {}, getstorage ] = useLocalStorge({});
    const [ id, setId ] = useState<number | string>();
    console.log(id)


    return (
        <>
            <UL>
                {getstorage.map(itens => (
                    <li key={itens?.id}><A to={`/mapa`} onClick={() => setId(itens.id)}>{itens.marca}</A></li>
                ))}
            </UL>
             {id && <NetworkGraph id={id} />}
             {!id && <IMG src={NetworkPNG} alt="nodes" />}
             
        </>
    );
}

export default Menu;
