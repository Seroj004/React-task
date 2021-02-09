import React from "react"
import s from "./decor.module.css"
// import {useSelector} from "react-redux";
import img1 from "../images/Rectangle 4.png"
import img2 from "../images/Rectangle 5.png"
import img4 from "../images/Rectangle 6.png"
import img3 from "../images/Rectangle 7.png"
import arrow from "../images/Arrow 3.png"


const Decor = () =>{

    // const photos = useSelector(state=> state.photoStore.photo)

    return <div className={s.decor}>

        <h1 className={s.title}>High Quality Home Decor</h1>

        <p className={s.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue eu sagittis feugiat nunc sit est vitae eget. Nisl at sed <br/>
            ultrices pharetra massa consectetur lobortis velit fames. Iaculis arcu rhoncus tellus porta ornare nunc libero. Accumsan <br/>
            nisi, ullamcorper non venenatis egestas convallis sed dignissim massa.
        </p>


        <div className={s.photos}>

             {/*we can do like this))*/}


            {/*{photos.map(p=> {*/}
            {/*    return <div className={s.img}  key={p.id}>*/}
            {/*        <div className={s.center} >*/}
            {/*        <img src={p.src} alt=""/>*/}
            {/*           <div className={s.name}> {p.name}</div>*/}
            {/*            <img src={p.line} alt=""/>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*})}*/}

<div className={s.sec1}>
    <div className={s.imge}>
    <img src={img1} alt=""/>
    </div>
    <div className={s.center}>
    <h2 className={s.tit}>Living Room</h2>
    <div className={s.arr}>
        <img src={arrow} alt=""/>
    </div>
    </div>
</div>

<div className={s.sec2}>
    <div className={s.imge}>
    <img src={img2} alt=""/>
    </div>
    <div className={s.center}>
    <h2 className={s.tit}>Kitchen</h2>
    <div className={s.arr}>
        <img src={arrow} alt=""/>
    </div>
    </div>
</div>

<div className={s.sec3}>
    <div className={s.imge}>
    <img src={img3} alt=""/></div>
    <div className={s.center}>
    <h2 className={s.tit}>Bathroom</h2>
    <div className={s.arr}>
        <img src={arrow} alt=""/>
    </div>
    </div>
</div>

<div className={s.sec4}>
    <div className={s.imge}>
    <img src={img4} alt=""/>
    </div>
    <div className={s.center}>
    <h2 className={s.tit}>Bathroom</h2>
    <div className={s.arr}>
        <img src={arrow} alt=""/>
    </div>
    </div>

</div>


        </div>



    </div>
}


export default Decor;