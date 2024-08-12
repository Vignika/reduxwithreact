import { legacy_createStore as createStore } from 'redux';
import rootReducer from './rootReducer';
//importing a default export

const store = createStore(rootReducer)
export default store