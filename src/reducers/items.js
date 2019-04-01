export const items = (state = [], action) => {
  switch(action.type) {
    case 'ADD_IDEA':
      return [...state, {title: state.title, items: [...state.items, action.item]}]
    case 'ADD_TITLE':
      return [...state, {title: action.title}]
    default: 
      return state
  }
}