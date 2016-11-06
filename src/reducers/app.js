function generatePart(n) {
  return {
    part: n,
    levels: {
      1: [1, 2],
      2: 1
    }
  }
}

const initialState = {
  part: 1,
  level: 1,
  step: 1,
  available: [
    generatePart(1),
    generatePart(2),
    generatePart(3),
    {
      part: 4,
      levels: {
        1: [1, 2, 3],
        2: 2
      }
    }
  ]
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_STEP':
      return Object.assign({}, state, { [action.item]: action.value });
    default:
      return state;
  }
}
