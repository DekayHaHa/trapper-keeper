import { hasError } from '../../actions';
import { editNote } from '../../actions/index';
import { changeNote } from '../changeNote';

jest.mock('../getNotes');

describe('changeNote', () => {
	let mockDispatch;
	let mockNote;
	beforeEach(() => {
		mockNote = { id: 2, title: 'title', itemList: ['items'] }
		mockDispatch = jest.fn();
		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
			ok: true
		}));
	});

	it('calls fetch', async () => {
		let mockUrl = `http://localhost:3001/api/notes/${mockNote.id}`
		const mockOption = {
			method: 'PUT',
			body: JSON.stringify(mockNote),
			headers: {
				'Content-Type': 'application/json'
			}
		}
		const thunk = changeNote(mockNote)
		await thunk(mockDispatch);
		expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockOption);
	});

	it('dispatches editNote if response is ok', async () => {
		const thunk = changeNote(mockNote);
		await thunk(mockDispatch);
		expect(mockDispatch).toHaveBeenCalledWith(editNote(mockNote));
	});

	it('dispatches hasError if response is not ok', async () => {
		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
			ok: false,
			statusText: 'something went wrong'
		}));

		const thunk = changeNote(mockNote);
		await thunk(mockDispatch);
		expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong'));
	});
});