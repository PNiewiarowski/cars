import React from "react";
import styles from "./form.module.scss";

function Form({ children, ...rest }) {
  return (
    <form className={styles.form} {...rest}>
      {children}
    </form>
  );
}

Form.InputText = function ({ icon, children, ...rest }) {
  return (
    <label className={styles.form__group}>
      <span className={styles.form__label}>
        {icon}
      </span>
      <input className={styles.form__input} {...rest} />
    </label>
  );
}

Form.Button = function ({ variant, children, ...rest }) {
  const externalStyle = {};

  switch (variant) {
    case "green":
      externalStyle.color = "#75df75";
      break;
    case "yellow":
      externalStyle.color = "#dfdf75";
      break;
    case "red":
      externalStyle.color = "#df7575";
      break;
    default:
      externalStyle.color = "#ffffff";
  };

  return (
    <button className={styles.form__button} style={externalStyle} {...rest}>
      {children}
    </button>
  );
}

Form.Title = function ({ children, ...rest }) {
  return (
    <h3 className={styles.form__title} {...rest}>
      {children}
    </h3>
  );
}

export default Form;