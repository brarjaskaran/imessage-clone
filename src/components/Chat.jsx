import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectChatId, selectChatName } from '../features/chatSlice';
import db from '../firebase';
import "./Chat.css"
import Message from './Message';
import firebase from 'firebase';
import { selectUser } from '../features/userSlice';
function Chat() {
    const user =useSelector(selectUser)
    const [input, setInput]= useState("");
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);
    const [messages, setMessages]= useState([]);


    useEffect(()=>{
        if(chatId){
            db.collection('chats').doc(chatId).collection("messages")
            .orderBy("timestamp", "desc").onSnapshot((snapshot)=> setMessages(
                snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    data: doc.data()
                }))
            ))
        }

    },[chatId])




    const sendMesage = (e)=>{
        e.preventDefault();

        db.collection('chats').doc(chatId).collection("message").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName

        })

    }

    return (
        <div className="chat">
            <div className="chat__header">
                <h4>To: <span className="chat__name">{chatName}</span></h4>
                <strong>Details</strong>
            </div>
            <div className="chat__messages">

                {messages.map(({id, data}) =>(
                    <Message key={id} contents={data}/>
                ))}
                    

            </div>
            <div className="chat__input">
                <form action="">
                    <input placeholder="imessage" value={input} onChange={(e)=> setInput(e.target.value)}
                    type="text"/>
                    <button onClick={sendMesage}>Send Message</button>
                </form>
                <IconButton >
                <MicNoneIcon className="chat__mic" />
                </IconButton>
            </div>

            
        </div>
    )
}

export default Chat
