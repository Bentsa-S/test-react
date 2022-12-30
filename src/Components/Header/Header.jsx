import React from "react";
import style from "./Header.module.css"
import logo from "../../assets/logo_header.png"

const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} alt=""/>
            <nav className={style.nav}>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </nav>
        </header>
    )
}

export default Header;