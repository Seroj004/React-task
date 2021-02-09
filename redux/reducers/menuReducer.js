import {ADD_MENU} from "../types/menuTypes";



const menuState = {
menu:[
    {id:1,name:"Furniture"},
    {id:2,name:"Lighting"},
    {id:3,name:"Decor"},
    {id:4,name:"Tablewear"}

]
}

const menuReducer = (state = menuState, action) => {

    switch (action.type){
        case ADD_MENU :
            return {
                ...state, menu: state.menu.concat([action.payload])
            }

        default:
            return state
    }
}

export default menuReducer