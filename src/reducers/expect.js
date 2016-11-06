const initialState = 0;

export default function expect(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_EXPECT':
      return action.value;
    default:
      return state;
  }
}
