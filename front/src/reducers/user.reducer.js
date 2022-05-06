import { ADD_CARD, GET_USER, DELETE_CARD } from '../actions/user.actions';

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;

    case ADD_CARD:
      return {
        ...state,
        shopCart: [action.payload, ...state.shopCart],
      };

    case DELETE_CARD:
      return {
        ...state,
        shopCart: state.shopCart.filter((id) => id !== action.payload.cardId),
      };

    default:
      return state;
  }
}
