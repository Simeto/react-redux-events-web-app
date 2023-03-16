import stylesContainer from "../../../scss/_layout.module.scss";
import styles from "./Content.module.scss";
import { Main, Sidebar, Header, Modal } from "../../layout";
import { WriteComment } from "../../../app/parts";
const Content = () => {
  return (
    <div className={stylesContainer.container}>
      <Modal>
        <WriteComment />
      </Modal>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default Content;
