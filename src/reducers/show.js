const initialState = null;

export default function show(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SHOW':
      return action.value;
    default:
      return state;
  }
}
