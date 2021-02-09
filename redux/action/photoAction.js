import {SET_PHOTO} from "../types/menuTypes";

const setPhoto = (data) => {
    return {
        type: SET_PHOTO,
        payload: data
    }
}

export default setPhoto()