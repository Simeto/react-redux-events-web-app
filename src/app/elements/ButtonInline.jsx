import styles from "./ButtonInline.module.scss";
import { Link } from "react-router-dom";

const ButtonInline = ({to, text, arrow }) => {
  return (
    <Link to={to}>
      <button className={styles["btn-inline"]}>
        {text} {arrow && <span>&rarr;</span>}
      </button>
    </Link>
  );
};

export default ButtonInline;
