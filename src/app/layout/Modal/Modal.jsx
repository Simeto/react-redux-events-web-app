import styles from "./Modal.module.scss";

import { createPortal } from "react-dom";

const Overlay = (props) => {
  return <div id="modal-popup"  className={styles.modal}></div>;
};

const OverlayContent = ({ children }) => {
  return <div className={styles["modal__content"]}>{children}</div>;
};

const Modal = ({ children }) => {
  return (
    <>
      {createPortal(<Overlay />, document.getElementById("overlay-root"))}
      {createPortal(
        <OverlayContent children={children} />,
        document.getElementById("overlay-content-root")
      )}
    </>
  );
};

export default Modal;
