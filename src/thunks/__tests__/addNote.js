import { hasError } from '../../actions';
import { getNotes } from '../getNotes';
import { addNote } from '../addNote';

jest.mock('../getNotes');

describe('addNote', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.url.com';
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }));
  });

  it('calls fetch', async () => {
    const thunk = addNote()
    await thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalled();
  });

  it('dispatches getNotes if response is ok', async () => {
    const thunk = addNote();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(getNotes());
  });
  
  it('dispatches hasError if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong'
    }));

    const thunk = addNote();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong'));
  });
});