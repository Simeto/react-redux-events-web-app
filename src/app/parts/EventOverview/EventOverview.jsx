import styles from "./EventOverview.module.scss";
import { Icon, ButtonInline } from "../../elements";

const EventOverview = () => {
  return (
    <div className={styles.overview}>
      <h1 className={styles["overview__heading"]}>Event overview</h1>
      <div className={styles["overview__stars"]}>
        <Icon name="icon-star-full" className={styles["stars__icon"]} />
        <Icon name="icon-star-full" className={styles["stars__icon"]} />
        <Icon name="icon-star-full" className={styles["stars__icon"]} />
        <Icon name="icon-star-half" className={styles["stars__icon"]} />
        <Icon name="icon-star-empty" className={styles["stars__icon"]} />
      </div>
      <div className={styles["overview__location"]}>
        <Icon name="icon-location" className={styles["location__icon"]} />
        <ButtonInline text="See the event location" />
      </div>
      <div className={styles["overview__rating"]}>
        <div className={styles["overview__rating-average"]}>7.5</div>
        <div className={styles["overview__rating-count"]}>678 votes</div>
      </div>
    </div>
  );
};

export default EventOverview;
