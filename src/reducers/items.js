export const items = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_ITEMS':
      return action.items;
    default: 
      return state;
  }
}