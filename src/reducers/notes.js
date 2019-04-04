export const notes = (state = [], action) => {
  switch(action.type) {
    case 'SET_NOTES':
      return action.notes;
    case 'REMOVE_NOTE':
      return state.filter(note => note.id !== action.id);
    default: 
      return state;
  }
}