import React from "react"
import { NavLink } from "react-router-dom";
import s from "./topheader.module.css";


const MenuItem = ({ name, id }) => {
    return <li key={id}>
        <NavLink
            to={`/${name}`}
            className={s.link}
            activeClassName={s.active}
        >
            {name}

        </NavLink>

    </li>



}

export default MenuItem;