import { Avatar } from '@material-ui/core'
import React from 'react'
import { setChat } from '../features/chatSlice'
import "./SidebarChats.scss"
import { useDispatch } from 'react-redux';

function SidebarChats({id, chatName}) {
    const dispatch = useDispatch();
    

    return (
        <div onClick={()=> dispatch(
            setChat({
                chatId: id,
                chatName: chatName
            })
        )} 
        className="sidebarChats">
            <Avatar/>
            <div  className="sidebarChats__info">
                <h3>{chatName}</h3>
                <p>Last message sent...</p>
                <small>timestamp</small>
            </div>
            
        </div>
    )
}

export default SidebarChats
