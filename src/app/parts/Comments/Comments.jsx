import styles from "./Comments.module.scss";
import { BgVideo } from "../../elements";
import { Comment } from "../../components";
import { EventFooter } from "../../parts";

const Comments = () => {
  return (
    <>
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
      <EventFooter
        // ToDo href='#modal-popup'
        visibleText="Write comment"
        invisibleText="Inform others"
        heading="Write what you thing about the event !"
      />
    </>
  );
};

export default Comments;
