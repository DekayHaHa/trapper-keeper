import { hasError } from '../actions';

export const addItem = (url, options) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url, options);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      console.log(data)
    } catch(error) {
      dispatch(hasError(error.message))
    }
  }
}