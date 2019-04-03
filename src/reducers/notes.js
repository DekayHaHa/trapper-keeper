export const notes = (state = [], action) => {
  switch(action.type) {
    case 'SET_NOTES':
      return action.notes;
    default: 
      return state;
  }
}