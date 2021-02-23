import { combineReducers } from 'redux';
import UserReducer from '../reducers/user';
import ProductsReducer from '../reducers/products';

const rootReducer = combineReducers({
  isUserLoggedIn:UserReducer,
  products:ProductsReducer
});

export default rootReducer;
