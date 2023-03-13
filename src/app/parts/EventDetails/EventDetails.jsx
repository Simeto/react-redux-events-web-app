import styles from "./EventDetails.module.scss";
import { ButtonInline, BgVideo } from "../../elements";
import { ReactionCard } from "../../components";

const EventDetails = () => {
  return (
    <div className={styles.details}>
      <BgVideo />
      <div className={styles.information}>
        <p className={styles.concept}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <p className={styles.concept}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. orem Ipsum has been the industry's
        </p>
        <ul className={styles.benefits}>
          <li className={styles["benefits__item"]}>Free parking</li>
          <li className={styles["benefits__item"]}>Free wardrobe</li>
          <li className={styles["benefits__item"]}>Free swimming pool</li>
          <li className={styles["benefits__item"]}>Free WiFi</li>
          <li className={styles["benefits__item"]}>Drink & Food</li>
          <li className={styles["benefits__item"]}>Close to the beach</li>
          <li className={styles["benefits__item"]}>Nearby attractions</li>
          <li className={styles["benefits__item"]}>and more...</li>
        </ul>
        <div className={styles.participant}>
          <p className={styles["participant__number"]}>
            Sam and 3 other participants recommend this event.
          </p>
          <div className={styles["participant__photos"]}>
            <img
              src="../../../assets/profile.jpg"
              alt="User"
              className={styles["participant__user-photo"]}
            />
            <img
              src="../../../assets/profile4.jpg"
              alt="User"
              className={styles["participant__user-photo"]}
            />
            <img
              src="../../../assets/profile2.jpg"
              alt="User"
              className={styles["participant__user-photo"]}
            />
            <img
              src="../../../assets/profile3.jpg"
              alt="User"
              className={styles["participant__user-photo"]}
            />
          </div>
        </div>
      </div>
      <div className={styles["users-reactions"]}>
        <ReactionCard
          name="Janet Brown"
          date="Jan 23rd 2012"
          rating="9.5"
          photo="../../../assets/profile.jpg"
        />
        <ReactionCard
          name="Kelly Lopes"
          date="Jan 24th 2012"
          rating="8.7"
          photo="../../../assets/profile2.jpg"
        />
        <ButtonInline text="Show all" arrow={true} />
      </div>
    </div>
  );
};

export default EventDetails;
