export const mutateSingleEvent = (state, action) => {
  const { payload } = action
  return {...state, events: payload.data}
}