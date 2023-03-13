import styles from "./ButtonSolid.module.scss";

const ButtonSolid = ({ visibleText, invisibleText }) => {
  return (
    <button className={styles["btn-booking"]}>
      <span className={styles["btn-booking__visible"]}>Book now</span>
      <span className={styles["btn-booking__invisible"]}>
        Only 5 tickets left
      </span>
    </button>
  );
};

export default ButtonSolid;
