import styles from "./Main.module.scss";
import { Event, EventsList, EventBooking } from "../../views";
import { EventDetails, Comments } from "../../parts";

const Main = () => {
  return (
    <main className={styles.main}>
    <Event>
    <EventDetails />
     {/* <Comments />  */}
      {/* <EventBooking /> */}
    </Event> 
      {/* <EventsList /> */}
    </main>
  );
};

export default Main;
