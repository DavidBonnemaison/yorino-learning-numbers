export function updateExpect(value) {
  console.log('new guess : ');
  console.log(value);
  return {
    type: 'UPDATE_EXPECT',
    value
  };
}
