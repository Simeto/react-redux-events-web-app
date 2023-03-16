import styles from "./EventFooter.module.scss";
import { ButtonSolid } from "../../elements";

const EventFooter = ({to, visibleText, invisibleText, heading }) => {
  return (
    <div className={styles['event-footer']}>
      <h2 className={styles["event-footer__header"]}>
        {heading}
      </h2>
      <ButtonSolid
        to={to}
        visibleText={visibleText}
        invisibleText={invisibleText}
      />
    </div>
  );
};

export default EventFooter;
