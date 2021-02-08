import React from "react"
import s from "./sellers.module.css"
import {useSelector} from "react-redux";
import arrow from "../images/Arrow 3.png"
import {FiShoppingCart} from "react-icons/all";


const Sellers = () =>{

    const sofas = useSelector(state=> state.sofaStore.photo)

    return <div className={s.sellers} id="sellers">

        <h1 className={s.title}>Best Sellers</h1>

        <div className={s.center}>

            <div className={s.section}>
                {sofas.map(m=>{
                    return <div className={s.all} key={m.id}>
                            <div className={s.images}>
                        <img  src={m.src} alt=""/>
                            </div>
                        <div className={s.shadow}>
                            <div className={s.sofa}>{m.name}</div>
                            <div className={s.dollars}>{m.price}</div>
                            <button className={s.btn}>
                                <span className={s.icon}><FiShoppingCart/></span>

                                <span>{m.btn}</span>

                            </button>
                        </div>
                    </div>
                })}
            </div>

        <div className={s.more}>
            <span className={s.see}>see more</span>
            <div className={s.arrow}>
                <img src={arrow} alt=""/>
            </div>
        </div>

        </div>

    </div>
}

export default Sellers;