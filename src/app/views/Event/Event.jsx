import { Outlet } from "react-router-dom";
import { EventGallery, EventOverview } from "../../parts";

const Event= () => {
  return (
    <>
      <EventGallery />
      <EventOverview />
      <Outlet />
    </>
  );
};

export default Event;
