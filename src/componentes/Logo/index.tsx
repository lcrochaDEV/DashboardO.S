
import { styled } from "styled-components";

const LogoType = styled.img`
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
    }
    &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
    }
`;

interface Props{
    url: string;
    alt?: string;
}

const Logo = ({url}: Props) => {
  
    return(
        <>
            <LogoType src={url} alt="logo"/>
        </>
    );
}

export default Logo;