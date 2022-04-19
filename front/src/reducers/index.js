import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import cardReducer from './card.reducer';

export default combineReducers({
  userReducer,
  cardReducer,
});
