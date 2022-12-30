import React from "react";
import style from "./Main.module.css"
import Nav from "./Nav/Nav";
import Section from "./Section/Section";

const Main = (props) => {
    return (
        <main className={style.main}>
            {props.children}
        </main>
    )
}

export default Main;