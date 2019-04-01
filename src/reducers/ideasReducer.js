export const ideasReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_IDEA':
      return action.idea
    default: 
      return state
  }
}