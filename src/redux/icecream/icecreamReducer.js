import { BUY_ICECREAM } from "./icecreamTypes"; 
//import a named export as a property of an object

const initialState = {
    numIcecreams: 10,

}

const icecreamReducer =  (state = initialState,action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                numIcecreams: state.numIcecreams-1
            }
            default: return state
    }
}

export default icecreamReducer
