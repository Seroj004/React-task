import React from "react"
import s from "./footer.module.css"



const Footer = () =>{
    return <div className={s.footer}>

        <div className={s.center}>

        <div className={s.section}>
                <div className={s.sec}>
            <a href="https://www.google.com">About Us</a>
                </div>
            <div className={s.sec}>
            <a href="https://www.google.com">Student Discount</a>
            </div>
            <div className={s.sec}>
            <a href="https://www.google.com">Coupons</a>
            </div>
        </div>


        <div className={s.section}>

            <div className={s.sec}>
            <a href="https://www.google.com">Contact Us</a>
            </div>
            <div className={s.sec}>
            <a href="https://www.google.com">Customer Service</a>
            </div>
        </div>


        <div className={s.section}>
                <div className={s.sec}>
            <a href="https://www.google.com">FAQ</a>
                </div>
            <div className={s.sec}>
            <a href="https://www.google.com">Order Status</a>
            </div>
        </div>


        <div className={s.section}>
                <div className={s.sec}>
            <a href="https://www.google.com">Call Us: +123 456789</a>
                </div>
            <div className={s.sec}>
            <a href="https://www.google.com">Hours: Monday-Friday 10:00-21:00</a>
            </div>
        </div>


        </div>
    </div>
}

export default Footer;