import { GET_PRODUCT, REMOVE_PRODUCT } from '../actions/product.actions';

const initialState = [];

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return [...state, action.payload];

    case REMOVE_PRODUCT:
      return [...state.filter((id) => id !== action.payload)];

    default:
      return state;
  }
}
