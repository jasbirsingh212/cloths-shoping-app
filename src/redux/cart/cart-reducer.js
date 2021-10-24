import { ADD_TO_CART, CLEAR_FROM_CART, REMOVE_FROM_CART } from '../action';
import { groupItems, clearFromCart, removeItem } from './cart-helper';

const initialCart = {
    cartItem: [],
    cartCount: 0,
}

const cartReducer = (state=initialCart, action) => {
    const { type, payload } = action;

    switch(type){
        case ADD_TO_CART:{
            return {
                ...state,
                cartItem: groupItems(state.cartItem, payload)
            }
        }

        case CLEAR_FROM_CART: {
            return {
                ...state,
                cartItem : clearFromCart(state.cartItem, payload)
            }
        }

        case REMOVE_FROM_CART: {
            return {
                ...state,
                cartItem: removeItem(state.cartItem, payload)
            }
        }

        default: return state;
    }
} 

export default cartReducer;