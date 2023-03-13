import styles from "./UserNav.module.scss";
import { Icon } from "../../elements";

const UserNav = () => {
  return (
    <nav className={styles["user-nav"]}>
        <div className={styles["user-nav__icon-box"]}>
          <Icon name="icon-bookmark" className={styles["user-nav__icon"]} />
          <span className={styles["user-nav__notification"]}>34</span>
        </div>
        <div className={styles["user-nav__icon-box"]}>
          <Icon name="icon-bubble" className={styles["user-nav__icon"]} />
          <span className={styles["user-nav__notification"]}>41</span>
        </div>
        <div className={styles["user-nav__user"]}>
          <img
            src="../../../assets/user.png"
            alt="User"
            className={styles["user-nav__user-photo"]}
          />
          <span className={styles["user-nav__user-name"]}>Simeon</span>
        </div>
      </nav>
  );
};

export default UserNav;
