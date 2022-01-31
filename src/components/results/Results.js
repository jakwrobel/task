import React from "react";
import styles from "./results.module.scss";

export const Results = ({ results }) => {

  return (
    <div>
      <ul>
        {results.map((el) => (
          <li key={results.name}>
            <span>Name: {el.name}</span>
            <span>country: {el.country}</span>
            <span>Industry: {el.industry}</span>
            <span>Employees: {el.numberOfEmployees}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
