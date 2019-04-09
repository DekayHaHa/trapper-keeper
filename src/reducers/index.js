import { combineReducers } from 'redux';
import { notes } from './notes';
import { error } from './error';
import { loading } from './loading';
import { setStartId } from './setStartId';

export const rootReducer = combineReducers({
  notes,
  error,
  loading,
  setStartId
});