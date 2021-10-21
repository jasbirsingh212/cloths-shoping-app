import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import logger from 'redux-logger';

const middleWares = [logger];


const  store = createStore(rootReducer,compose(
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
     applyMiddleware(
   ...middleWares
)),);

export default store;