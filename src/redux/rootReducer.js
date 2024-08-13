import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import cupReducer from "./CupCake/cupReducer";
import { userReducer } from "./users/userReducer";


const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream : icecreamReducer,
    cup: cupReducer,
    user:userReducer
})

export default rootReducer