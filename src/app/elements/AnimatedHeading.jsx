import styles from "./AnimatedHeading.module.scss";

const AnimatedHeading = ({ text }) => {
  return (
    <div className={styles["animated-heading"]}>
      <h2 className={styles["animated-heading__header"]}>{text}</h2>
    </div>
  );
};

export default AnimatedHeading;
