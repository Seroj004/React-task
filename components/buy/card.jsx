import React from "react"
import s from "./buy.module.css"
import cardlogo from "../images/cardlogo.png"
import line1 from "../images/line1.png"
import line2 from "../images/line2.png"
import line3 from "../images/line3.png"
import line4 from "../images/line4.png"


const Card = () =>{
    return <div className={s.card}>

        <div className={s.center}>
        <div className={s.main}>
            <div className={s.cardlogo}>
                <img src={cardlogo} alt=""/>
            </div>

            <div className={s.line}>
                <img src={line1} alt=""/>
            </div>

            <div className={s.line}>
                <img src={line2} alt=""/>
            </div>

            
            <div className={s.line1}>
            <span className={s.cardtit}>Card Number</span><span className={s.cardtit2}>0123-4567-8901-2345</span>
            </div>

            <div className={s.line1}>
                <span className={s.cardtit}>Name</span>  <span className={s.cardtit2}>Tom Thompson</span>
            </div>

            <div className={s.second}>
                <div className={s.line2}>
                <span className={s.cardtit}>Exp.date</span> <span className={s.cardtit2}>12/21</span>
                </div>
                <div className={s.line2}>
                    <span className={s.cardtit}>CVC</span> <span className={s.cardtit2}>1234</span>
                </div>
            </div>

            <div className={s.line3}>
                <img src={line3} alt=""/>
            </div>
            <div>
                <img src={line4} alt=""/>
            </div>

        </div>



            <div className={s.right}>
                    <div className={s.cardall}>
                <div className={s.cardtitle}>Sofa Francesca</div>
                <div className={s.carddollars}>300$</div>
                <div className={s.cardbutton}><button className={s.cardbtn}>Accept</button></div>
                    </div>
            </div>
        </div>
    </div>
}

export default Card