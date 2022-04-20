import { ADD_CARD } from '../actions/card.actions';

const initialState = [];

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];

    default:
      return state;
  }
}
