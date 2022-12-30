import React from "react";
import style from "./Section.module.css"
import Profile from "./Profile/Profile";
import PostsContainer from "./Posts/PostsContainer";

const Section = () => {
    return (
        <section className={style.section}>
            <Profile/>
            <PostsContainer />
        </section>
    )
}

export default Section;