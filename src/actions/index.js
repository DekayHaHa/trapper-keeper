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