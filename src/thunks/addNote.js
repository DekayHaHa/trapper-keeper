import { hasError } from '../actions';
import { getNotes } from './getNotes';

export const addNote = (data) => {
  const option = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const url = 'http://localhost:3001/api/notes'
  return async (dispatch) => {
    try {
      const response = await fetch(url, option);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(getNotes());
    } catch(error) {
      dispatch(hasError(error.message))
    }
  }
}