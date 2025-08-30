import styled from 'styled-components';
import cpu from '../Hosts/cpu.svg'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import DialogBox from '../DialogBox';
import Forms from './Forms';


const Section = styled.section`
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    margin: 7px;
    display: flex;
    justify-content: flex-start;
`;  
const P = styled.p`
    margin: 10px;
`;
const IMG = styled.img`
    width: 60px;
`;

interface ModelHost {
    id?: number | string | undefined
    FullHostnameFQDN?: string | undefined
    ShortHostname?: string | undefined
    HWaddress?: string | undefined
    Address?: string | undefined
}

const Host: React.FC = () => {
    const { hostId } = useParams(); 

    const queryClient = useQueryClient();
    const isUserData = queryClient.getQueryData<ModelHost[]>(['isHostData', 'isHostCacheData']);
    const [ data, setData ] = useState<ModelHost>(isUserData?.find(itens => itens.id === Number(hostId)) as ModelHost)
    useEffect(() => {
        setData(isUserData?.find(itens => itens.id === Number(hostId)) as ModelHost);
    }, [data]);

    const [ logo, setLogo ] = useState<string | undefined>();

    let [open, setOpen] = useState<Boolean>(false);

    const handleOpenDialog = () => {
        open = !open
        setOpen(open)
    };
    
    return(
        <>
            <Section>
                <a href="#"  onClick={() => setOpen(true)}>
                    <IMG src={logo ?? cpu} alt="cpu" />
                </a>
                <P>{data.FullHostnameFQDN} <span>{data.ShortHostname}</span></P>
                <P>MAC: {data.HWaddress}</P>
                <P>IP: {data.Address}</P>
            </Section>
            {open && (
                <DialogBox hooksChildren={handleOpenDialog} hendleCmpnente={<Forms />}/>
                )
            } 
        </>
    );
}

export default Host;
