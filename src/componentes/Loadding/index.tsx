import styled from 'styled-components';


const Polygon = styled.polygon`
    stroke-dasharray: 17;
    animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
    @keyframes dash {
        to {
            stroke-dashoffset: 136;
        }
    }
`;
const Text = styled.text`
    font-family: 'Orbitron', sans-serif;
    font-size: 7px;
    animation: blink 0.9s ease-in-out infinite;
    @keyframes blink {
        50% {
            opacity: 0;
        }
    } 
`;


const Loading = () => {
    return(
        <svg width="200" height="200" viewBox="0 0 40 60">
            <Polygon fill="none" stroke="#fff" stroke-width="1" points="16,1 32,32 1,32" />
            <Text x="0" y="45" fill="#fff">Loading...</Text>
        </svg>
    )
}
export default Loading;
