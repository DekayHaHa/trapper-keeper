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
    case 'DRAG_NOTE':
      const mutatedState = [...state];
      const initialId = mutatedState.find(note => action.startId === note.id);
      const hoverId = mutatedState.find(note => action.overId === note.id);
      const indexInitial = mutatedState.indexOf(initialId);
      const indexHover = mutatedState.indexOf(hoverId);
      const throwVar = [mutatedState[indexInitial], mutatedState[indexHover]] = [mutatedState[indexHover], mutatedState[indexInitial]];
      return mutatedState;
    default:
      return state;
  }
}