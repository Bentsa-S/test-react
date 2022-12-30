import React from "react";
import style from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogsReducer";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messageElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>)
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItem}>
                {dialogsElements}
            </div>
            <div className={style.messageItem}>
                {messageElements}
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='send message'>
                    </textarea>
                </div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;