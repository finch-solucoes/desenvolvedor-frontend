import { combineReducers } from 'redux';

import products from './products/reducer';

const reducers = combineReducers({ products });

export default reducers;
