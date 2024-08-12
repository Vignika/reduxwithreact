import { BUY_CUP } from "./cupTypes"; 
//import a named export as a property of an object

const initialState = {
    numCups: 10,

}

const cupReducer =  (state = initialState,action) => {
    switch(action.type){
        case BUY_CUP:
            return {
                ...state,
                numCups: state.numCups-1
            }
            default: return state
    }
}

export default cupReducer
