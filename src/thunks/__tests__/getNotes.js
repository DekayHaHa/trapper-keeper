import { hasError, setNotes } from '../../actions';
import { getNotes } from '../getNotes';


describe('getNotes', () => {
  let mockDispatch;
  let mockData;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockData = ['notes', 'notes']
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        mockData
      })
    }));
  });

  it('calls fetch', async () => {
    const thunk = getNotes()
    await thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalled();
  });

  it.skip('dispatches setNotes if response is ok', async () => {
    const thunk = getNotes();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setNotes(mockData));
  });
  
  it('dispatches hasError if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong'
    }));

    const thunk = getNotes();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong'));
  });
});