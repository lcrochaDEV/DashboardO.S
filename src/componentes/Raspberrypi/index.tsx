import logo from '../Raspberrypi/raspberrypi.svg'
import React, { useState, useEffect, useRef } from "react";
import Logo from '../Logo';
import styled from 'styled-components';

const Lados = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: baseline; 
    color: #00ff40;
    margin: 0;
    padding: 0;
`;
const Chat = styled.div`
    overflow-y: auto;
    overflow: hidden;
    scroll-behavior: smooth;
    max-height: calc(100vh - 380px);
    display: flex;
    flex-direction: column-reverse;
    margin-top: 20px;
    &:hover{
        overflow: auto;
        scrollbar-color: #313175 rgb(148, 148, 148, 0.1);

    }
`;

const Formulario = styled.div`
    position: absolute;
    bottom: 0;
    margin: 0;
    padding: 0;
`;


const client_id = Date.now()

const Raspberrypi: React.FC = () => {

    const [messageText, setmessageText] = useState<string>(''); //SEND | ENVIA
    const [serverMsg, setserverMsg] = useState< string[]> ([]); //RECEIVE | RECEBE

    const ws = useRef<WebSocket | null>(null);

    const imputText = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setmessageText(event.target.value)
    }
    const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        ws.current?.send(messageText)
        setmessageText('') 
    }

    useEffect(() => {
        ws.current = new WebSocket(`ws://localhost:8000/raspberry/${client_id}`);

        ws.current.onopen = () => {
            console.log(`WebSocket connected ID ${client_id}`);
        };      
        
        ws.current.onmessage = (event: MessageEvent) => {
            setserverMsg(prevMessages => [...prevMessages, event.data])
            console.log(serverMsg)
        }
        return () => {
            ws.current?.close();
        };
    }, []);

    return(
        <>
            <Lados>
                <article>
                    <Logo url={logo}/> 
                    <h2>Your ID: <span>{client_id}</span></h2>                  
                    <Formulario>
                    <form action="" onSubmit={sendMessage}>
                        <input type="text" onChange={imputText} value={messageText} autoCapitalize="off"/>
                        <button>Send</button>
                    </form>
                    </Formulario>
                    <Chat>
                        <ul>
                            {serverMsg.length !== null   
                            ?   serverMsg.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            :   <p>{serverMsg}</p>
                            }
                        </ul>
                    </Chat>
                </article>
                <article>
                    <p>Lado B</p>
                </article>
            </Lados>
        </>
    );

}

export default Raspberrypi;