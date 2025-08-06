import styled, { keyframes } from 'styled-components';
import EngrenagemImg from './gce-systems-management-svgrepo-com.svg'
import { useEffect, useState } from 'react';
import DialogBox from '../DialogBox';
import { useGetLocalStorge } from '../useLocalStorge';

const IMG = styled.img`
    width: 40px;
    margin-right: 5px;
    margin-top: 1px;
`;


const Engrenagem = () => {
    let [open, setOpen] = useState(false);

    let [key, setKey] = useState('menuLateral');
    let [value, setvalue] = useState(false);
    let [poststorge] = useGetLocalStorge(key, 6)
    poststorge()

    const handleOpenDialog = () => {
        open = !open
        setOpen(open)
    };

    return(
        <>
            <a href={'#'} onClick={() => setOpen(true)}><IMG src={EngrenagemImg} alt="Engrenagem" /></a>
            {open && (
                <DialogBox hooksChildren={handleOpenDialog}/>
                )
            } 
        </> 
    )
}
export default Engrenagem;