import {ADD_MENU} from "../types/menuTypes";

const sendMenu = (post) => {
    return {
        type: ADD_MENU,
        payload: post
    }
}

export default sendMenu