import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

export const SearchBar = ({ allData, createUniques, handleSubmit }) => {
  const [inputValues, setInputValues] = useState({
    country: "",
    industry: "",
    sortField: "",
    sortDirection: "ascending",
  });

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Filter companies</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(
            inputValues.country,
            inputValues.industry,
            inputValues.sortField,
            inputValues.sortDirection
          );
        }}
        className={styles.form}
      >

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={inputValues.country}
          list="countryList"
          className={styles.filterOption}
          onChange={(e) =>
            setInputValues((state) => ({ ...state, country: e.target.value }))
          }
        />
        <datalist id="countryList">
          {createUniques(allData, "country").map((name) => (
            <option value={name} key={name} />
          ))}
        </datalist>
        <input
          type="text"
          name="industry"
          placeholder="Industry"
          value={inputValues.industry}
          list="industryList"
          className={styles.filterOption}
          onChange={(e) =>
            setInputValues((state) => ({ ...state, industry: e.target.value }))
          }
        />
        <datalist id="industryList">
          {createUniques(allData, "industry").map((name) => (
            <option value={name} key={name} />
          ))}
        </datalist>
        <label htmlFor="sortField" className={styles.label}>Sort by:</label>
        <select
          id="sortField"
          value={inputValues.sortField}
          className={styles.sortOption}
          onChange={(e) =>
            setInputValues((state) => ({ ...state, sortField: e.target.value }))
          }
        >
          <option value=""></option>
          <option value="name">Name</option>
          <option value="numberOfEmployees">Number of employees</option>
        </select>

        {inputValues.sortField.length > 0 && (
          <>
            <label htmlFor="sortDirection" className={styles.label}>Direction:</label>
            <select
              id="sortDirection"
              value={inputValues.sortDirection}
              className={styles.sortOption}
              onChange={(e) =>
                setInputValues((state) => ({
                  ...state,
                  sortDirection: e.target.value,
                }))
              }
            >
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </>
        )}

        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};
