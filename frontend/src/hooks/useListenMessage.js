import { useEffect } from 'react';
import useConversation from './../zustand/useConversation.js';
import { useSocketContext } from "../context/SocketContext.jsx";


const useListenMessage = () => {

    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            setMessages([...messages, newMessage]);
        });
        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);

};

export default useListenMessage;