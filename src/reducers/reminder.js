const initialState = {
  mustRemind: false,
  checkRemind: false
};

export default function reminder(state = initialState, action) {
  switch (action.type) {
    case 'MUST_REMIND':
      return Object.assign({}, state, {mustRemind: true});
    case 'HAS_REMINDED':
      return Object.assign({}, state, {mustRemind: false});
    case 'CHECK_REMIND':
      return Object.assign({}, state, {checkRemind: action.value});
    default:
      return state;
  }
}
