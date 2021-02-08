import React, {useState} from "react"
import s from "./buy.module.css"
import img1 from "../images/Rectangle 8.png"
import img2 from "../images/Rectangle 9.png"
import Card from "./card";




const Buy = () =>{

    const [show,setShow] = useState(true)

    const click = () =>{
        setShow (!show)
    }



    return <div className={s.buy}>






<div className={s.center}>


    <div className={s.sec}>
            <div className={s.image}>
        <img src={img1} alt=""/>
            </div>


        <div className={s.all}>
            <div className={s.shadow}>
                <div className={s.title}>
                    Sofa Francesca
                </div>
                <div className={s.dollars}>
                    300$
                </div>
            </div>
            <div className={s.button}>
                <button className={s.btn} onClick={click}>buy now</button>
            </div>
        </div>

    </div>

    <div className={s.sec}>
        <div className={s.image}>
        <img src={img2} alt=""/>
        </div>



        <div className={s.all}>
        <div className={s.shadow}>
        <div className={s.title}>
            Sofa Francesca
        </div>
            <div className={s.dollars}>
                300$
            </div>
        </div>
        <div className={s.button}>
            <button className={s.btn} onClick={click}>buy now</button>
        </div>
        </div>
    </div>



</div>


        {!show ?  <Card/> :null}

    </div>
}

export default Buy;