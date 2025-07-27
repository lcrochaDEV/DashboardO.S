import styled from 'styled-components';
import list_data from './list_data.json'


const Container = styled.section`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
`;


const NetworkGraph = () => {
    const data = list_data;

    return(
        <section>
            <Container/>
        </section>
    )
}

export default NetworkGraph;