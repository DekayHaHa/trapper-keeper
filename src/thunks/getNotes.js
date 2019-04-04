import { setNotes, hasError } from '../actions';

export const getNotes = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/notes');
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      dispatch(setNotes(data));
    } catch(error) {
      dispatch(hasError(error.message));
    }
  }
}