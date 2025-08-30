import styled from "styled-components";
import { ReactNode } from "react";

const Dialog = styled.dialog`
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
const Cancel = styled.span`
    cursor: pointer;
    position: absolute;
    right: 10px;
    text-align: left;
    font-size: 35px;
    color: #FFF;
`;
interface DialogBoxProps {
    hooksChildren: () => void; // A prop hooksChildren é uma função que não retorna nada
    hendleCmpnente: ReactNode; // A prop hendleCmpnente pode ser qualquer elemento React
}
const DialogBox = ({ hooksChildren, hendleCmpnente }: DialogBoxProps ) =>  {
    return (
        <>   
        <Dialog>
            {hendleCmpnente}
            <Cancel className="material-symbols-outlined" onClick={hooksChildren}>cancel</Cancel>
        </Dialog>   
        </>
    );
}

export default DialogBox;