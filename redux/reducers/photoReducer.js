import {SET_PHOTO} from "../types/menuTypes";
import living from "../../components/images/Rectangle 4.png"
import kitchen from "../../components/images/Rectangle 5.png"
import bedroom from "../../components/images/Rectangle 6.png"
import bathroom from "../../components/images/Rectangle 7.png"
import arrow from "../../components/images/Arrow 3.png"



const photoState = {
    photo:[
        {id:1,src:living,name:"Living Room",line:arrow,},
        {id:2,src:kitchen,name:"Kitchen",line:arrow},
        {id:3,src:bathroom,name:"Bathroom",line:arrow},
        {id:4,src:bedroom,name:"Bedroom",line:arrow}


    ]
}

const photoReducer = (state = photoState, action) => {

    switch (action.type){
        case SET_PHOTO :
            return {
                ...state, menu: state.menu.concat([action.payload])
            }

        default:
            return state
    }
}

export default photoReducer