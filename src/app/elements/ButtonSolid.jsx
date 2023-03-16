import styles from "./ButtonSolid.module.scss";
import { Link } from "react-router-dom";

const ButtonSolid = ({ to, visibleText, invisibleText }) => {
  return (
    <Link to={to}>
      <button className={styles["btn-booking"]}>
        <span className={styles["btn-booking__visible"]}>{visibleText}</span>
        <span className={styles["btn-booking__invisible"]}>
          {invisibleText}
        </span>
      </button>
    </Link>
  );
};

export default ButtonSolid;
