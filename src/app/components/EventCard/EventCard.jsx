import styles from "./EventCard.module.scss";
import { ButtonSolid } from "../../elements";
const EventCard = () => {
  return (
    <div className={styles["event-card"]}>
      <div
        className={`${styles["event-card__side"]} ${styles["event-card__side--front"]}`}
      >
        <div className={styles["event-card__picture"]}>&nbsp;</div>
        <h4 className={styles["event-card__heading"]}>
          <span className={styles["event-card__heading-text"]}>
            Event summary
          </span>
        </h4>
        <div className={styles["event-card__details"]}>
          <ul className={styles["summary"]}>
            <li className={styles["summary__item"]}>Free parking</li>
            <li className={styles["summary__item"]}>Free wardrobe</li>
            <li className={styles["summary__item"]}>Free swimming pool</li>
            <li className={styles["summary__item"]}>Free WiFi</li>
            <li className={styles["summary__item"]}>Drink & Food</li>
          </ul>
        </div>
      </div>
      <div
        className={`${styles["event-card__side"]} ${styles["event-card__side--back"]}`}
      >
        <div className={styles["event-card__price"]}>
          <div className={styles["price-box"]}>
            <div className={styles["price-box__text"]}>Only</div>
            <div className={styles["price-box__amount"]}>340$</div>
          </div>
          <ButtonSolid to='/event/1' visibleText="Overview" invisibleText="Check details"/>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
