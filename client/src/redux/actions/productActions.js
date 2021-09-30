import { ActionType } from "../constant/actionType"
export const setProducts = (products) => {
  return{
    type : ActionType.SET_PRODUCTS,
    payload : products
  }
}

export const selectProducts = (product) => {
    return{
      type : ActionType.SELECTED_PRODUCTS,
      payload : product
    }
  }