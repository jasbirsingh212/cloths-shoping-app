import { ADD_USER } from "../action"

export const add_User = (user) => {

    return {
        type : ADD_USER,
        payload: user,
    }
}