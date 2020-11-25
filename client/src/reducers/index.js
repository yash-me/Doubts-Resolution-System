import { combineReducers } from 'redux';

import posts from './posts';
import ta from './ta'

export const reducers = combineReducers({ 
    posts,ta
 });