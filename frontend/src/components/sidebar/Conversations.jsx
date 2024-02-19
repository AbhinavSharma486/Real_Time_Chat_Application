import React from 'react';
import { getRandomEmoji } from "../../utils/emojis";
import useGetConversations from '../../hooks/useGetConversations.js';
import Conversation from "./Conversation.jsx";


const Conversations = () => {

    const { loading, conversations } = useGetConversations();


    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {
                conversations && conversations.map((conversation, idx) => (
                    <Conversation
                        key={conversation._id}
                        conversation={conversation}
                        emoji={getRandomEmoji()}
                        lastIdx={idx === conversations.length - 1}
                    />
                ))
            }

            {
                loading ? <span className='loading loading-spinner mx-auto'></span> : null
            }
        </div>
    );
};

export default Conversations;