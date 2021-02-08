import {combineReducers} from "redux";
import menuReducer from "./menuReducer";
import photoReducer from "./photoReducer";
import sofaReducer from "./sofaReducer";


const rootReducer = combineReducers({
    menuStore: menuReducer,
    photoStore: photoReducer,
    sofaStore: sofaReducer


})

export default rootReducer;