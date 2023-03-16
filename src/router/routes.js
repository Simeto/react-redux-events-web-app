import { Content, Main } from "../app/layout";
import { Event, EventsList, EventBooking } from "../app/views";
import { EventDetails, Comments } from "../app/parts";

const routes = [
  {
    path: "/",
    element: <Content />,
    children: [
      {
        index: '/',
        element: <Main />,
        children: [
          {
            index: true, element: <EventsList />
          },
          {
            path: "/event/:id",
            element: <Event />,
            children: [
              { path: "/event/:id", element: <EventDetails /> },
              { path: "/event/:id/comments", element: <Comments /> },
              { path: "/event/:id/booking", element: <EventBooking /> },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
