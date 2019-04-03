import { error } from '../error';
import * as actions from '../../actions';


describe('error', () => {
  it('should return initial state', () => {
    const expected = '';

    const result = error(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an error to global state', () => {
    const action = actions.hasError('this is an error');
    const initialState = '';
    const expected = 'this is an error';

    const result = error(initialState, action);
    expect(result).toEqual(expected);
  })
})