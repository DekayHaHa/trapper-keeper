export const setStartId = (state = '', action) => {
    switch (action.type) {
        case 'SET_START_ID':
            return action.startId
        default:
            return state;
    }
}