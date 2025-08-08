import styled from 'styled-components';
import EngrenagemImg from './gce-systems-management-svgrepo-com.svg'
import { useState } from 'react';
import DialogBox from '../DialogBox';


const IMG = styled.img`
    width: 40px;
    margin-right: 5px;
    margin-top: 1px;
`;


const Engrenagem = () => {
    let [open, setOpen] = useState(false);

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