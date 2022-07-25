import reduxEcoStoreApi from "../../api/reduxEcoStoreApi";
import { ActionType } from "../constant/actionType";

export const fetchProducts = () => async (dispatch) => {
  const response = await reduxEcoStoreApi.get('/products');

  dispatch({type : ActionType.FETCH_PRODUCTS,  payload :response.data});
  console.log(response)

};
export const fetchProduct = (id) => async (dispatch) => {
  const response = await reduxEcoStoreApi.get(`/products/${id}`);

  dispatch({type : ActionType.SELECTED_PRODUCT,  payload :response.data});
  console.log(response)

};

export const setProducts = (products) => {
  return{
    type : ActionType.SET_PRODUCTS,
    payload : products
  }
}

export const selectedProduct = (product) => {
    return{
      type : ActionType.SELECTED_PRODUCT,
      payload : product
    }
  }

export const removeSelectedProduct = () => {
  return{
    type: ActionType.REMOVE_SELECTED_PRODUCT
  }
}