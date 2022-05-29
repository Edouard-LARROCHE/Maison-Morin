import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import cardReducer from './card.reducer';
import productReducer from './product.reducer';

export default combineReducers({
  userReducer,
  cardReducer,
  productReducer,
});
