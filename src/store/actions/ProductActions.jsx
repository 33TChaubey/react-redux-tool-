import axios from "axios";
import { getproducts } from "../reducers/ProductReducer";

export const asyncgetproducts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(getproducts(response.data)); // Dispatch the action with data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};
