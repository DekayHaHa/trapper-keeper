import { loading } from '../loading';
import * as actions from '../../actions';


describe('Loading', () => {
  it('should return initial state', () => {
    const expected = false;

    const result = loading(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return a boolean to global state', () => {
    const action = actions.setLoading(true);
    const initialState = '';
    const expected = true;

    const result = loading(initialState, action);
    expect(result).toEqual(expected);
  })
})