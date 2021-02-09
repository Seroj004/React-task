import React,{useState} from "react"
import s from "./furnitures.module.css"
import {AiFillCaretRight, BsFillCaretDownFill, FiShoppingCart} from "react-icons/all";
import {useSelector} from "react-redux";



const Furnitures = () =>{

    const sofas = useSelector(state=> state.sofaStore.photo)
    const menu = useSelector(state=> state.sofaStore.menu)
    const value = useSelector(state=> state.sofaStore.value)




    return <div className={s.furnitures}>




        <div className={s.center}>


            <div className={s.menues}>
                {menu.map(m=>{
                    return <div className={s.menu}>
                        <form>

                            <select className={s.select}>
                                <option value={m.name}>{m.name}</option>
                                {value.map(val => (
                                    <option   className={s.val} value={val.name}>{val.name}</option>
                                ))}


                            </select>


                        </form>
                    </div>
                })}

            </div>


            {/*<div className={s.menues}>*/}
            {/*    {menu.map(m=>{*/}
            {/*        return  <div className={s.menu} onClick={click}>*/}
            {/*           <div> {m.name}</div> <div className={s.iconDown}>*/}
            {/*            {!show ? <BsFillCaretDownFill size={15}/>*/}
            {/*           : <AiFillCaretRight/>}*/}
            {/*        </div>*/}
            {/*        </div>*/}

            {/*    })}*/}

            {/*    {!show ?  <div className={s.dropMenu}>*/}
            {/*        {value.map(v=>{*/}
            {/*            console.log(value)*/}
            {/*            return  <div className={s.link}><a href="">{v.name}</a></div>*/}
            {/*        })}*/}
            {/*    </div>:show}*/}

            {/*</div>*/}

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



        </div>

    </div>
}


export default Furnitures;