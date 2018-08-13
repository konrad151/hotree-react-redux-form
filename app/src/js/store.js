// import { createStore } from "redux";
// import rootReducer from "../reducers/index";

// const store = createStore(rootReducer);
// export default store;

import { createStore } from 'redux';
import reducers from './reducers/index';

export const store = createStore(reducers);