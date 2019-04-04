export const loading = (state = false, action) => {
switch (action.type) {
    case 'SET_LOADING':
        return action.isLoading;
    default:
        return state;
    }
}