import { hasError, editNote } from '../actions';

export const changeNote = (note) => {
	const option = {
		method: 'PUT',
		body: JSON.stringify(note),
		headers: {
			'Content-Type': 'application/json'
		}
	}
	const url = `http://localhost:3001/api/notes/${note.id}`;
	return async (dispatch) => {
		try {
			const response = await fetch(url, option);
			if (!response.ok) {
				throw Error(response.statusText);
			}
			dispatch(editNote(note));
		} catch (error) {
			dispatch(hasError(error.message));
		}
	}
}