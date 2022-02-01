import React from "react";
import styles from "./Item.module.scss";

export const Item = ({ data }) => {
    console.log(data)
  return (
    <li className={styles.wrap}>
      <div className={styles.info}>Name: {data.name}</div>
      <div className={styles.info}>Country: {data.country}</div>
      <div className={styles.info}>Industry: {data.industry}</div>
      <div className={styles.info}>Employees: {data.numberOfEmployees}</div>
    </li>
  );
};
