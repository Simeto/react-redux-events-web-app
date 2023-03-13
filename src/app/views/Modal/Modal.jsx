import styles from "./Modal.module.scss";

const Modal = ({ children }) => {
  return (
    <div id="modal-popup" className={styles.modal}>
      <div className={styles["modal__content"]}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
