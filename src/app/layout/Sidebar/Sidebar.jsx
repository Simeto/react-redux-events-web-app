import styles from "./Sidebar.module.scss";
import { Icon } from "../../elements";

const Sidebar = () => {
  return (
    <>
      <nav className={styles.sidebar}>
        <ul className={styles['side-nav']}>
          <li className={`${styles['side-nav__item']} ${styles['side-nav__item--active']}`}>
            <a href="./" className={styles['side-nav__link']}>
              <Icon name="icon-home" className={styles['side-nav__icon']} />
              <span>Item 1</span>
            </a>
          </li>
          <li className={styles['side-nav__item']}>
            <a href="./" className={styles['side-nav__link']}>
              <Icon name="icon-airplane" className={styles['side-nav__icon']} />
              <span>Item 2</span>
            </a>
          </li>
          <li className={styles['side-nav__item']}>
            <a href="./" className={styles['side-nav__link']}>
              <Icon name="icon-location" className={styles['side-nav__icon']} />
              <span>Item 3</span>
            </a>
          </li>
          <li className={styles['side-nav__item']}>
            <a href="./" className={styles['side-nav__link']}>
              <Icon name="icon-map" className={styles['side-nav__icon']} />
              <span>Item 4</span>
            </a>
          </li>
          
        </ul>

        <div className={styles.legal} >
          &copy; 2023 by Simeon Stanimirov
        </div>
      </nav>
    </>
  );
};

export default Sidebar;