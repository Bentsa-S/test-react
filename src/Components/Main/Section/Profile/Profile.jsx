import React from "react";
import style from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={style.profile}>
            <h1>Name Surname</h1>
            <p>BIO</p>
            <a href="#">link</a>
            <a href="#">link</a>
            <a href="#">link</a>
        </div>
    )
}

export default Profile;