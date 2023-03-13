import styles from "./ReactionCard.module.scss";

const ReactionCard = (props) => {
  const { text, photo, name, date, rating } = props;
  const lorem =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s";
  return (
    <figure className={styles["reaction-card"]}>
      <blockquote className={styles["reaction-card__user-text"]}>
        {!text ? lorem : text}
      </blockquote>
      <figcaption className={styles["reaction-card__user"]}>
        <img
          src={photo}
          alt="User"
          className={styles["reaction-card__user-photo"]}
        />
        <div className={styles["reaction-card__user-box"]}>
          <div className={styles["reaction-card__user-name"]}>{name}</div>
          <div className={styles["reaction-card__user-date"]}>{date}</div>
        </div>
        <div className={styles["reaction-card__user-rating"]}>{rating}</div>
      </figcaption>
    </figure>
  );
};

export default ReactionCard;
