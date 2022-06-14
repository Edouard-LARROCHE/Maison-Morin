import { GET_PRODUCTEFFECT } from '../actions/productEffect.actions';

const initialState = [];

export default function productEffectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTEFFECT:
      return action.payload;

    default:
      return state;
  }
}
