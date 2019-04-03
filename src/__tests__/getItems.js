import { getItems } from '../thunks/getItems';
import { setItems, hasError } from '../actions';

describe('getItems', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.url.com';
    mockDispatch = 'jest.fn()';
  });

  it.skip('should dispatch setItems if response is ok', async () => {
    const mockItems = [{id: 2, title: 'gym', noteItems:['suana', 'swim', 'yoga']}];
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        items: mockItems
      })
    }));

    const thunk = getItems(mockUrl);
    await thunk(mockDispatch);
    const items = await mockDispatch(mockItems);
    expect(mockDispatch).toHaveBeenCalledWith(setItems(items));
  });

  it.skip('should dispatch hasError with a response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong.'
    }))

    const thunk = getItems(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong.'))
  })
})

