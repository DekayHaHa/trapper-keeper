import { combineReducers } from 'redux';
import { items } from './items';
import { error } from './error';

export const rootReducer = combineReducers({
  items,
  error
});