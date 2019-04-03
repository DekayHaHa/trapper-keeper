export const notes = (state = [], action) => {
  switch(action.type) {
    case 'SET_NOTES':
      return action.items;
    default: 
      return state;
  }
}