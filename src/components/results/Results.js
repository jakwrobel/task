import React from "react";
import { Item } from "./Item";
import styles from "./results.module.scss";

export const Results = ({ results }) => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Companies list</h2>
      <ul>
        {results.map((el) => (
          <Item data={el} key={el.id} />
        ))}
      </ul>
    </div>
  );
};
