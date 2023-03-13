import styles from "./BookNow.module.scss";
import { ButtonSolid } from "../../elements";

const BookNow = () => {
  return (
    <div className={styles.booking}>
      <h2 className={styles["booking__book"]}>
        You can buy thickets for this event here !
      </h2>
      <ButtonSolid />
    </div>
  );
};

export default BookNow;
