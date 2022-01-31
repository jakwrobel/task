import React, { useState } from "react";

export const SearchBar = ({ allData, createUniques, handleSubmit }) => {
  const [inputValues, setInputValues] = useState({
    country: "",
    industry: "",
    sortField: "",
    sortDirection: "ascending"
  });

  return (
    <div>
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
      >
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={inputValues.country}
          list="countryList"
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
          id="industry"
          name="industry"
          value={inputValues.industry}
          list="industryList"
          onChange={(e) =>
            setInputValues((state) => ({ ...state, industry: e.target.value }))
          }
        />
        <datalist id="industryList">
          {createUniques(allData, "industry").map((name) => (
            <option value={name} key={name} />
          ))}
        </datalist>
        <label htmlFor="sortField">Sort by:</label>
        <select
          id="sortField"
          value={inputValues.sortField}
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
            <label htmlFor="sortDirection">Direction:</label>
            <select
              id="sortDirection"
              value={inputValues.sortDirection}
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

        <button type="submit">Search</button>
      </form>
      <div></div>
    </div>
  );
};
