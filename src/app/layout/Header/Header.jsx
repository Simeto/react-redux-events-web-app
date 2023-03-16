import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { SearchForm, UserNav } from "../../components";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.link}>
        <img
          src="../../../assets/logo.png"
          alt="logo"
          className={styles.logo}
        />
      </Link>
      <SearchForm />
      <UserNav />
    </header>
  );
};

export default Header;
