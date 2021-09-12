import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./modal.module.scss";

function Modal({ children, ...rest }) {
  return (
    <div className={styles.modal} {...rest}>
      {children}
    </div>
  );
}

Modal.Container = function ({ children, ...rest }) {
  return (
    <div className={styles.modal__container} {...rest}>
      {children}
    </div>
  );
}

Modal.Navbar = function ({ children, ...rest }) {
  return (
    <div className={styles.modal__navbar} {...rest}>
      {children}
    </div>
  );
}

Modal.Close = function ({ ...rest }) {
  return (
    <button className={styles.modal__close} {...rest}>
      <AiOutlineClose />
    </button>
  );
}

Modal.Title = function ({ children, ...rest }) {
  return (
    <h3 className={styles.modal__title} {...rest}>{children}</h3>
  );
}

export default Modal;