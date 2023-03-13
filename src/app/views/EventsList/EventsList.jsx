import styles from "./EventsList.module.scss";
import { EventCard } from "../../components";

const EventsList = () => {
  return (
    <div className={styles["events-list"]}>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default EventsList;
