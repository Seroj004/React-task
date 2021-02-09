import React,{useState} from "react"
import s from './topheader.module.css'
import { useSelector} from "react-redux";
import logo from "../images/logo.png"
import {BsSearch, FiShoppingCart} from "react-icons/all";
import MenuItem from "./menuitem";
import { NavLink } from "react-router-dom";


const TopHeader = () =>{

    const menu = useSelector(state=> state.menuStore.menu)



    return <div className={s.topheader}>

        <div className={s.logo}>
            <img src={logo} alt="photo"/>
            <span className={s.int}>Interior</span>
        </div>

        <nav className={s.menu}>
            <ul>
                {menu.map(m => {
                    return <MenuItem name={m.name}
                                     id={m.id} />
                })}

            </ul>
        </nav>

        <div className={s.icons}>
            <div className={s.icon}>
                <NavLink
                    to="buy"
                    className={s.link}
                    activeClassName={s.active}
                >   <FiShoppingCart size={24}/></NavLink>
            </div>
            <div className={s.icon}>
               <NavLink
                   to="search"
                   className={s.link}
                   activeClassName={s.active}
               > <BsSearch size={24}/></NavLink>
            </div>
        </div>


    </div>
}

export default TopHeader;