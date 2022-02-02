import React from "react";
import styles from "./Error.module.scss";

export const Error = ({ message }) => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Error</h1>
      <p className={styles.message}>{message}</p>
      <p className={styles.instruction}>Refresh the page or try again</p>
    </div>
  );
};
