import React from "react";
import avatar from "../../../../assets/avatar_min.png";
import style from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={style.message}>
            <img src={avatar} alt=""/>
            {props.message}
        </div>
    )
}

export default Message;