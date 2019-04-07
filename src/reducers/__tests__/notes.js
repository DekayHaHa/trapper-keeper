import { notes } from '../notes';
import * as actions from '../../actions';

describe('notes', () => {
  it('should return initial state', () => {
    const expected = [];

    const result = notes(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an array to global state for setNotes', () => {
    const action = actions.setNotes(['note', 'note']);
    const initialState = [];
    const expected = ['note', 'note'];

    const result = notes(initialState, action);
    expect(result).toEqual(expected);
  });

  it('if action is removeNote, should return a shortened array to global state', () => {
    const action = actions.removeNote(2);
    const initialState = [{ id: 1, title: 'note' }, { id: 2, title: 'note' }];
    const expected = [{ id: 1, title: 'note' }];

    const result = notes(initialState, action);
    expect(result).toEqual(expected);
  })

  it('if action is editNote, should return array with updated note', () => {
    const newMockNote = { id: 2, title: 'NEW TITLE' }
    const action = actions.editNote(newMockNote);
    const initialState = [{ id: 1, title: 'note' }, { id: 2, title: 'note' }];
    const expected = [{ id: 1, title: 'note' }, { id: 2, title: 'NEW TITLE' }];

    const result = notes(initialState, action);
    expect(result).toEqual(expected);
  })
});