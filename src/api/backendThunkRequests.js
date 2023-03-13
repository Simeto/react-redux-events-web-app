import { request, endpoints } from ".";
import { connectionActions } from "../store";

export const connectToEventbrite = () => {
  return async dispatch => {
    await request({
      method: "GET",
      endpoint: endpoints.user.connect,
      onSuccess: (payload) => {
        dispatch(connectionActions.connectEventbrite(payload))
      },
      onError: 'Connection did not establish !!!'
    });
  }
};

// export const eventsFetch = () => {
//   request({
//     method: "GET",
//     endpoint: endpoints.events.venue(123),
//     onSuccess: (payload) => {
//       eventsSliceReducer.actions.fetchEvents(payload)
//     },
//   });
// };
