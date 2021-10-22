import { ADD_TO_CART } from '../action';
import { groupItems } from './cart-helper';

const initialCart = {
    cartItem: []
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

        default: return state;
    }
} 

export default cartReducer;