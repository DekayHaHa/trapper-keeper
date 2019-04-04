export const notes = (state = [], action) => {
  switch(action.type) {
    case 'SET_NOTES':
      return action.notes;
    case 'NEW_NOTE':
      return [...state, action.newNote];
    default:
      return state;
  }
}