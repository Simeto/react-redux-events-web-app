import styles from "./ButtonStep.module.scss";

const ButtonStep = () => {
  return (
    <button className={`${styles["btn-step"]} ${styles["btn-step--success"]}`}>
      Next step <span>&rarr;</span>
    </button>
  );
};

export default ButtonStep;
