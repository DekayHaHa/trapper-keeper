import { hasError, removeNote } from "../actions";

export const deleteNote = (id) => {
  const option = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const url = `http://localhost:3001/api/notes/${id}`;
  return async (dispatch) => {
    try {
      const response = await fetch(url, option);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(removeNote(id))
    } catch(error) {
      dispatch(hasError(error.message));
    }
  }
}