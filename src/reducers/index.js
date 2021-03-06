import { combineReducers } from 'redux';
import { notes } from './notes';
import { error } from './error';
import { loading } from './loading';
import { snackbarReducer } from 'material-ui-snackbar-redux';

export const rootReducer = combineReducers({
  notes,
  error,
  loading,
  snackbar: snackbarReducer
});