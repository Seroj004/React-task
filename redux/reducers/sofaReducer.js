import {SET_SOFA} from "../types/menuTypes";
import sofa1 from "../../components/images/Rectangle 8.png"
import sofa2 from "../../components/images/Rectangle 9.png"
import sofa3 from "../../components/images/Rectangle 10.png"
import sofa4 from "../../components/images/Rectangle 11.png"



const sofaState = {
    photo:[
        {id:1,src:sofa1,name:"Sofa Francesca",price:"300$",btn:"Add"},
        {id:2,src:sofa2,name:"Sofa Francesca",price:"300$",btn:"Add"},
        {id:3,src:sofa3,name:"Sofa Francesca",price:"300$",btn:"Add"},
        {id:4,src:sofa4,name:"Sofa Francesca",price:"300$",btn:"Add"}

    ],

    menu:[
        {id:1,name:"living room"},
        {id:2,name:"bedroom"},
        {id:3,name:"Kitchen"},
        {id:4,name:"Outdoor"},
        {id:5,name:"Office"},
        {id:6,name:"Restaurants"}
    ],

    value:[
        {id:1,name:"sofas"},
        {id:2,name:"Tables"},
        {id:3,name:"Chairs"},
        {id:4,name:"Closets"},

    ]
}

// const x = sofaState.photo.map((i,index)=>{
//     const width = ((index % 2) && 2 )  ||
//         (index % 3 && 1.3) ||
//         (index % 4 && 1.4)
//         ||
//         (index % 5 && 1.8) ||
//         (index % 6 && 1.1) || 1.5
//     return {
//         ...i,
//         width:width,
//         height:1
//     }
// })

const sofaReducer = (state = sofaState, action) => {

    switch (action.type){
        case SET_SOFA :
            return {
                ...state, menu: state.menu.concat([action.payload])
            }

        default:
            return state
    }
}

export default sofaReducer