import { GET_CARD, REMOVE_CARD } from '../actions/card.actions';

const initialState = [];

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARD:
      return [...state, action.payload];

    case REMOVE_CARD:
      return [...state.filter((id) => id !== action.payload.card)];

    default:
      return state;
  }
}
