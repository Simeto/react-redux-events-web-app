import { Main, Sidebar } from "../../layout";
import styles from "./Content.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default Content;
