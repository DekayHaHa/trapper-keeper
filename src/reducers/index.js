import { combineReducers } from 'redux';
import { notes } from './notes';
import { error } from './error';
import { loading } from './loading';

export const rootReducer = combineReducers({
  notes,
  error,
  loading
});