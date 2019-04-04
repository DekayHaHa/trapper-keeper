// export const addTitle = (title) => ({
//   type: 'ADD_TITLE',
//   title
// })

// export const addItem = (item) => ({
//   type: 'ADD_ITEM',
//   item
// })

export const setNotes = (notes) => ({
  type: 'SET_NOTES',
  notes
});

export const newNote = (newNote) => ({
  type: 'NEW_NOTE',
  newNote
});

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
});

export const setLoading = (isLoading) => ({
  type: 'SET_LOADING',
  isLoading
});