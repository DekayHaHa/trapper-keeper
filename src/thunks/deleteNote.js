import { hasError, removeNote } from "../actions";
// import { getNotes } from "./getNotes";

export const deleteNote = (id) => {
  console.log('in delete')
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
      console.log(id)
      dispatch(removeNote(id))
    } catch(error) {
      dispatch(hasError(error.message));
    }
  }
}