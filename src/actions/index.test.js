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

  describe('editNote', () => {
    it('should return and object with EDIT_NOTE and the note', () => {
      const mockNote = { id: 2, title: 'title', itemsList: ['items'] }
      const expected = { type: 'EDIT_NOTE', note: mockNote }
      const results = actions.editNote(mockNote)
      expect(results).toEqual(expected)
    })
  })

  describe('removeNote', () => {
    it('should return and object with REMOVE_NOTE and the note id', () => {
      const expected = { type: 'REMOVE_NOTE', id: 2 }
      const results = actions.removeNote(2)
      expect(results).toEqual(expected)
    })
  })

  describe('setLoading', () => {
    it('should return and object with SET_LOADING and isLoading = true', () => {
      const expected = { type: 'SET_LOADING', isLoading: true }
      const results = actions.setLoading(true)
      expect(results).toEqual(expected)
    })
    it('should return and object with SET_LOADING and isLoading = false', () => {
      const expected = { type: 'SET_LOADING', isLoading: false }
      const results = actions.setLoading(false)
      expect(results).toEqual(expected)
    })
  })

  describe('newNote', () => {
    it('should return and object with NEW_NOTE and the note', () => {
      const mockNote = { id: 2, title: 'title', itemsList: ['items'] }
      const expected = { type: 'NEW_NOTE', newNote: mockNote }
      const results = actions.newNote(mockNote)
      expect(results).toEqual(expected)
    })
  })


});