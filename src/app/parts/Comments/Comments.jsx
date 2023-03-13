import styles from "./Comments.module.scss";
import { BgVideo } from "../../elements";
import { Comment } from "../../components";

const Comments = () => {
  return (
    <div id="comments" className={styles["comments__wrapper"]}>
      <BgVideo />
      <div className={styles.comments}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Comments;
