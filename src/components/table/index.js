import React from "react";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineMinus } from "react-icons/ai";
import styles from "./table.module.scss";

function Table({ children, ...rest }) {
  return (
    <table className={styles.table} {...rest}>
      {children}
    </table>
  );
}

Table.Head = function ({ children, ...rest }) {
  return (
    <thead className={styles.table__head} {...rest}>
      {children}
    </thead>
  );
}

Table.Body = function ({ children, ...rest }) {
  return (
    <tbody className={styles.table__body} {...rest}>
      {children}
    </tbody>
  );
}

Table.Row = function ({ children, ...rest }) {
  return (
    <tr className={styles.table__row} {...rest}>
      {children}
    </tr>
  );
}

Table.ColumnTitle = function ({ children, ...rest }) {
  return (
    <th className={styles.table__title} {...rest}>
      {children}
    </th>
  );
}

Table.Cell = function ({ children, ...rest }) {
  return (
    <td className={styles.table__cell} {...rest}>
      {children}
    </td>
  );
}

Table.Sign = function ({ status, ...rest }) {
  return (
    <span  {...rest}>
      {status === "none" && <AiOutlineMinus className={styles.table__none} />}
      {status === "asc" && <AiFillCaretUp className={styles.table__sign} />}
      {status === "desc" && <AiFillCaretDown className={styles.table__sign} />}
    </span>
  );
}

export default Table;