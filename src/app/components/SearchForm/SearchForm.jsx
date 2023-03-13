import styles from "./SearchForm.module.scss";
import { Icon } from "../../elements";

const SearchForm = () => {
  return (
    <>
      <form action="#" className={styles['search-form']}>
        <input
          type="text"
          className={styles['search-form__input']}
          placeholder="Search event"
        />
        <button className={styles['search-form__button']}>
          <Icon name="icon-search" className={styles['search-form__icon']} />
        </button>
      </form>
    </>

  );
};

export default SearchForm;
