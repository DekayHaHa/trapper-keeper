import { notes } from '../notes';
import * as actions from '../../actions';

describe('notes', () => {
  it('should return initial state', () => {
    const expected = [];
    
    const result = notes(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return a category to global state', () => {
    const action = actions.setNotes(['note', 'note']);
    const initialState = [];
    const expected = ['note', 'note'];

    const result = notes(initialState, action);
    expect(result).toEqual(expected);
  });
});