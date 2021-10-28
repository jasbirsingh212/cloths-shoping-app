import { createStore, applyMiddleware, compose } from "redux";
import rootReducer  from "./root-reducer";
import logger from 'redux-logger';
import { persistStore } from "redux-persist";

const middleWares = [logger];


export const  store = createStore(rootReducer,compose(
    // @ts-ignore
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
     applyMiddleware(
   ...middleWares
)),);

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
