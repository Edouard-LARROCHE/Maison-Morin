import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import cardReducer from './card.reducer';
import productReducer from './product.reducer';
import productEffectReducer from './productEffect.reducer';

export default combineReducers({
  userReducer,
  cardReducer,
  productReducer,
  productEffectReducer,
});
