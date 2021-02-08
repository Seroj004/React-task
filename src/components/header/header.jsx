import React from "react"
import s from "./header.module.css"
import TopHeader from "../topheader/topheader"
import arrow from "../images/Arrow 2.png"
import { HashLink as Link } from "react-router-hash-link";



const Header = () =>{
    return <div className={s.header}>

        <TopHeader/>

        <div className={s.center}>

            <div>
           <h1 className={s.title}> Create your confort zone</h1>
            </div>

            <div className={s.button}>
                <Link smooth to="#sellers">
                <button className={s.btn}>Shop now</button>
                    </Link>
            </div>

            <div className={s.arrow}>
                <img src={arrow} alt=""/>
            </div>
        </div>

    </div>
}

export default Header;