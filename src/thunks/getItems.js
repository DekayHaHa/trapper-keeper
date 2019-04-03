import { setItems, hasError } from '../actions';

export const getItems = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      dispatch(setItems(data));
    } catch(error) {
      dispatch(hasError(error.message));
    }
  }
}