import React from "react";
import style from "./Nav.module.css";
import "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <NavLink to="/profile">My Page</NavLink>
            <NavLink to="/dialogs">Messages</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/videos">Videos</NavLink>
            <NavLink to="/music">Music</NavLink>
        </nav>
    )
}

export default Nav;