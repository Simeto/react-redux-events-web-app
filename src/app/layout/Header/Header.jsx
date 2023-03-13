import styles from "./Header.module.scss";
import { SearchForm, UserNav } from "../../components";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="../../../assets/logo.png" alt="logo" className={styles.logo} />
      <SearchForm />
      <UserNav />
    </header>
  );
};

export default Header;
