import { ActionType } from "../constant/actionType";

const initialState = {
    products : [
      {
        id: 1,
        title: "anilraj",
        category: "programer"
      }
    ]
}

export const productReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCTS:
            return state;
        default:
           return state;
    }
}