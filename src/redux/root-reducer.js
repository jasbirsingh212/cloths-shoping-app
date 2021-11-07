import { combineReducers } from 'redux';
import cartReducer from './cart/cart-reducer';
import userReducer from './user/user-reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import collectionReducer from './collections/collection-reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    collections: collectionReducer
})

// @ts-ignore
export default persistReducer(persistConfig, rootReducer);