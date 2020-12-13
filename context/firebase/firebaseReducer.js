import { GET_PRODUCTS_SUCCESS_TYPE } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS_TYPE:
            return { ...state, menu: action.value }

        default:
            return state;
    }
}