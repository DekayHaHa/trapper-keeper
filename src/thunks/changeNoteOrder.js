import { hasError } from '../actions';

export const changeNoteOrder = note => {
    const option = {
        method: 'PATCH',
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const url = 'http://localhost:3001/api/notes'
    return async (dispatch) => {
        try {
            const response = await fetch(url, option);
            if (!response.ok) {
                throw Error(response.statusText);
            }
        } catch(error) {
            dispatch(hasError(error.message));
        }
    }
}