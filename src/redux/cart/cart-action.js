import { ADD_TO_CART, CLEAR_FROM_CART, REMOVE_FROM_CART } from "../action"

export const addToCart = (item) => {

    return {
        type: ADD_TO_CART,
        payload: item
    }

}

export const clearFromCart = (item) => {
    return {
        type: CLEAR_FROM_CART,
        payload: item,
    }
}

export const removeFromCart = ( item ) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}