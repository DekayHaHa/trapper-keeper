import thunk from 'redux-thunk';
import { getItems } from '../thunks/getItems';
import { setItems, hasError } from '../actions';

describe('getItems', () => {
  let mockUrl;
  let dispatch;

  beforeEach(() => {
    mockUrl = 'www.url.com';
    dispatch = jest.fn();
  });

  it('should dispatch setItems if response is ok', async () => {
    const mockItems = [{id: 2, title: 'gym', noteItems:['suana', 'swim', 'yoga']}];
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        items: mockItems
      })
    }));

    const thunk = getItems(mockUrl);
    console.log(thunk)
    await thunk(dispatch);
    const items = await dispatch(mockItems);
    expect(dispatch).toHaveBeenCalledWith(setItems(items));
  });

  it('should dispatch hasError with a response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong.'
    }))

    const thunk = getItems(mockUrl);
    await thunk(dispatch);
    expect(dispatch).toHaveBeenCalledWith(hasError('something went wrong.'))
  })
})

