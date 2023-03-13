import styles from "./Comment.module.scss";

const Comment = () => {
  const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s`;
  return (
    <div className={styles.comment}>
      <figure className={styles["comment__shape"]}>
        <img
          src="../../../assets/profile.jpg"
          alt="User"
          className={styles["comment__photo"]}
        />
        <figcaption className={styles["comment__caption"]}>
          Samantha Jones
        </figcaption>
      </figure>
      <div className={styles["comment__text"]}>
        <h3 className={styles["comment__heading"]}>
          This event will be awesome !
        </h3>
        <p>{lorem}</p>
      </div>
    </div>
  );
};

export default Comment;
