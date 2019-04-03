// export const addTitle = (title) => ({
//   type: 'ADD_TITLE',
//   title
// }) 

// export const addItem = (item) => ({
//   type: 'ADD_ITEM',
//   item
// })

export const fetchItems = (items) => ({
  type: 'FETCH_ITEMS',
  items
});

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
});