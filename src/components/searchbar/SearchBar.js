import React, { useState } from "react";

export const SearchBar = ({ allData, createUniques, filterData }) => {
  const [inputValues, setInputValues] = useState({ country: "", industry: "" });

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          filterData(inputValues.country, inputValues.industry);
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
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
