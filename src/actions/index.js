export const setNotes = (notes) => ({
  type: 'SET_NOTES',
  notes
});

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
});

export const removeNote = (id) => ({
  type: 'REMOVE_NOTE',
  id
});

export const setLoading = isLoading => ({
  type: 'SET_LOADING',
  isLoading
});

export const newNote = newNote => ({
  type: 'NEW_NOTE',
  newNote
});

export const editNote = note => ({
  type: 'EDIT_NOTE',
  note
});
