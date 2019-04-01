import { combineReducers } from 'redux';
import { ideasReducer } from './ideasReducer';

export const rootReducer = combineReducers({
  ideas: ideasReducer
});