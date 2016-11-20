export function updateExpect(value) {
  return {
    type: 'UPDATE_EXPECT',
    value
  };
}

export function checkReminder(value) {
  return dispatch => {
    setTimeout(()=> {
      dispatch({
        type: 'CHECK_REMIND',
        value
      });
    }, 4000);
  }
}

export function mustRemind() {
  return {
    type: 'MUST_REMIND'
  }
}


export function hasReminded() {
  return {
    type: 'HAS_REMINDED'
  }
}
