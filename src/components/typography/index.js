import React from "react";
import styles from "./typography.module.scss";

function Typography({ children, ...rest }) {
  return (
    <div className={styles.typography} {...rest}>
      {children}
    </div>
  );
}

Typography.SubHeading = function ({ children, ...rest }) {
  return (
    <h2 className={styles.typography__subheading} {...rest}>{children}</h2>
  );
}

export default Typography;