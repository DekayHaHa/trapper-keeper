import * as actions from './index';

describe('actions', () => {
  describe('setNotes', () => {
    it('should return a type of SET_NOTES with the notes array', () => {
      const mockNotes = [
        { id: '1', title: 'NEW', itemsList: ['item1', 'item2', 'item3'] },
        { id: '2', title: 'Title', itemsList: ['item1', 'item2', 'item3'] },
        { id: '3', title: 'Title', itemsList: ['item1', 'item2', 'item3'] }
      ];
      const expected = {
        type: 'SET_NOTES',
        notes: mockNotes
      }
      const result = actions.setNotes(mockNotes);
      expect(result).toEqual(expected)
    });
  });

  describe('hasError', () => {
    it('should return a type of HAS_ERROR with the error message', () => {
      const mockError = 'There was an error.'
      const expected = {
        type: 'HAS_ERROR',
        message: mockError
      }
      const result = actions.hasError(mockError);
      expect(result).toEqual(expected)
    });
  });
});