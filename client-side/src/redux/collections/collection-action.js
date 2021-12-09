import { ADD_COLLECTION } from "../action";
import { getDataFromCollection } from "../../components/firbase/firebase-auth";

export const addCollection = (collection) => {
  return {
    type: ADD_COLLECTION,
    payload: collection,
  };
};

export const addCollectionAsync = () => {
  return async(dispatch) => {
    const collection = await getDataFromCollection("collections");
    dispatch(addCollection(collection));
  };
};
