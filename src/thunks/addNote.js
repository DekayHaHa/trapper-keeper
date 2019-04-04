import { hasError, newNote } from '../actions';
// import { getNotes } from './getNotes';

// ADD NOTE
export const addNote = (data) => {
  const url = 'http://localhost:3001/api/notes'
  const option = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }
  return async (dispatch) => {
    try {
      const response = await fetch(url, option);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      dispatch(newNote(data));
    } catch(error) {
      dispatch(hasError(error.message))
    }
  }
}