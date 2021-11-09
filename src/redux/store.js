// @ts-nocheck
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer  from "./root-reducer";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from "redux-persist";

const middleWares = [thunk]

if(process.env.NODE_ENV === 'development') {
  // @ts-ignore
  middleWares.push(logger)
}

export const  store = createStore(rootReducer,compose(
    // @ts-ignore
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
     applyMiddleware(
   ...middleWares,
)),);

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
