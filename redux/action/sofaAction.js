import {SET_SOFA} from "../types/menuTypes";

const setSofa = (data) => {
    return {
        type: SET_SOFA,
        payload: data
    }
}

export default setSofa()