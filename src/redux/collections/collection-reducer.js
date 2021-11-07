import { ADD_COLLECTION } from '../action'
const collectionReducer = (state=[], action) => {
    const { type , payload } = action;

    switch(type){
        case ADD_COLLECTION :   {
            return {
                ...state,
                data: payload
            }
        }

        default: return state
    }
}

export default collectionReducer;