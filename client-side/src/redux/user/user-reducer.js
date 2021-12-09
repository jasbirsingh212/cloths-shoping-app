import {ADD_USER} from '../action';

const userReducer = (state = {}, action ) => {

    const {type, payload } = action;
    switch(type){

        case ADD_USER :{
            return {
                ...state,
                currentUser: payload
            }
        } 


        default :  return state;
    }



}

export default userReducer;