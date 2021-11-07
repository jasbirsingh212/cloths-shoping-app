import { ADD_COLLECTION } from '../action'

export const addCollection = collection => {

    return {
        type: ADD_COLLECTION,
        payload: collection
    }
}