import styles from "./CloseModal.module.scss";

const CloseModal = ({ redirect }) => {
  return (
    <div className={styles["close-modal"]}>
      &times;
    </div>
  );
};

export default CloseModal;
