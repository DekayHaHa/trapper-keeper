export const notes = (state = [], action) => {
  switch (action.type) {
    case 'SET_NOTES':
      return action.notes;
    case 'REMOVE_NOTE':
      return state.filter(note => note.id !== action.id);
    case 'EDIT_NOTE':
      return state.map(note => {
        return action.note.id === note.id ? { ...action.note } : note
      });
    default:
      return state;
  }
}