import { EventGallery, EventOverview, BookNow } from "../../parts";

const Event= ({ children }) => {
  return (
    <>
      <EventGallery />
      <EventOverview />
      {children}
      <BookNow />
    </>
  );
};

export default Event;
