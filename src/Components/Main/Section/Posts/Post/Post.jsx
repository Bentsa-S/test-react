import React from "react";
import avatar from "../../../../../assets/avatar_min.png";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src={avatar} alt=""/>
            <p>{props.message}</p>
            <button>Likes: {props.likes}</button>
        </div>
    )
}

export default Post;