import React from "react";
import { Item } from "./Item";
import styles from "./results.module.scss";

export const Results = ({ results }) => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Companies list</h1>
      <ul className={styles.itemsWrap}>
        {results.map((el) => (
          <Item data={el} key={el.id} />
        ))}
      </ul>
    </div>
  );
};
