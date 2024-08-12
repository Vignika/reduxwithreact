import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import cupReducer from "./CupCake/cupReducer";


const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream : icecreamReducer,
    cup: cupReducer
})

export default rootReducer