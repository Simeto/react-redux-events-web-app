export const connectEventbrite = (state, action) => {
  console.log(action, '-----------------1-----------------');
  state.connection = action.payload
}
