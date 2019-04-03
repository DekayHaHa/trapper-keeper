import { combineReducers } from 'redux';
import { notes } from './notes';
import { error } from './error';

export const rootReducer = combineReducers({
  notes,
  error
});