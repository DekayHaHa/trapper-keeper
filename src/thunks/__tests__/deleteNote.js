import { hasError, removeNote } from '../../actions';
import { deleteNote } from '../deleteNote';


describe('deleteNote', () => {
  let mockId;
  let mockDispatch;

  beforeEach(() => {
    mockId = '2';
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }));
  });

  it('calls fetch', async () => {
    const thunk = deleteNote(mockId)
    await thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalled();
  });

  it('dispatches removeNote if response is ok', async () => {
    const thunk = deleteNote(mockId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(removeNote(mockId));
  });
  
  it('dispatches hasError if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong'
    }));

    const thunk = deleteNote();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong'));
  });
});