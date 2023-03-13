import styles from "./WriteComment.module.scss";
import { AnimatedHeading, ButtonSolid, CloseModal } from "../../elements";
const WriteComment = () => {
  return (
    <div className={styles["write-comment"]}>
      <div className={styles["write-comment__left"]}>
        <img
          src="../../../assets/event1.jfif"
          alt="Event"
          className={styles["write-comment__image"]}
        />
        <img
          src="../../../assets/event3.jfif"
          alt="Event"
          className={styles["write-comment__image"]}
        />
      </div>
      <div className={styles["write-comment__right"]}>
        <CloseModal />
        <AnimatedHeading text="Write comment !" />
        <div className={styles['write-comment__comment']}>
        <label for="comment-text" className={styles["write-comment__label"]}>
            Please type up to 300 characters
        </label>
        <textarea
          id="comment-text"
          className={styles["write-comment__text"]}
          placeholder="Write your comment here !"
        />
        </div>
        <ButtonSolid visibleText="Write Comment" invisibleText="Send"/>
      </div>
    </div>
  );
};

export default WriteComment;
