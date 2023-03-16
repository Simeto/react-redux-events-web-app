import styles from "./EventBooking.module.scss";
import { ButtonStep, BgVideo, AnimatedHeading } from "../../elements";
import { EventFooter } from "../../parts";

const EventBooking = () => {
  return (
    <>
      <div className={styles["event-booking"]}>
        <BgVideo />
        <div className={styles["book"]}>
          <form className={styles["book__form"]}>
            <AnimatedHeading text="Start booking now !" />
            <div className={styles["form__group"]}>
              <input
                id="input-name"
                type="text"
                className={styles["form__input"]}
                placeholder="Full Name"
                required
              />
              <label for="input-name" className={styles["form__label"]}>
                Full name
              </label>
            </div>
            <div className={styles["form__group"]}>
              <input
                id="input-email"
                type="email"
                className={styles["form__input"]}
                placeholder="Full Name"
                required
              />
              <label for="input-email" className={styles["form__label"]}>
                Email address
              </label>
            </div>
            <div className={styles["form__radio-group"]}>
              <div className={styles["form__radio"]}>
                <input
                  name="size"
                  type="radio"
                  id="single"
                  className={styles["form__radio-input"]}
                />
                <label for="single" className={styles["form__radio-label"]}>
                  <span className={styles["form__radio-btn"]}></span>
                  For single person
                </label>
              </div>
              <div className={styles["form__radio"]}>
                <input
                  name="size"
                  type="radio"
                  id="group"
                  className={styles["form__radio-input"]}
                />
                <label for="group" className={styles["form__radio-label"]}>
                  <span className={styles["form__radio-btn"]}></span>
                  <span>For more than one</span>
                </label>
              </div>
            </div>
            <div className="form__group">
              <ButtonStep />
            </div>
          </form>
        </div>
      </div>
      <EventFooter
        to="/"
        visibleText="Events list"
        invisibleText="More events"
        heading="Explore more interesting events here !"
      />
    </>
  );
};

export default EventBooking;
