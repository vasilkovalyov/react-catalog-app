import { combineReducers } from 'redux';
import products from './products';
import auth from './auth/';

const allReducers = combineReducers({
    auth,
    products,
})


export default allReducers;

