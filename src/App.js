//The main component.
//It holds app logic and returns other components, which are responsible for displaying the content
import React, { useState, useEffect } from "react";
import { getData } from "./utils/getData";
import { handleErrors } from "./utils/handleErrors";
import { SearchBar } from "./components/searchbar/SearchBar";
import { Results } from "./components/results/Results";
import { Error } from "./components/error/Error";
import styles from "./App.module.scss";

const App = () => {
  //The state holds data about all companies and filtered companies
  const [companies, setCompanies] = useState({
    all: [],
    searched: [],
  });

  //The state holds information about property by which data are sort and direction (ascending, descending)
  const [sortConfig, setSortConfig] = useState({
    field: "",
    direction: "",
  });

  //The state holds API error message
  const [error, setError] = useState("");

  //The function creates array of unique values (used to create unique options in datalist in <Searchbar/> component)
  const createUniques = (data, propName) => {
    return data
      .map((el) => el[propName])
      .filter((value, index, self) => self.indexOf(value) === index);
  };

  //The function is used as a completion for "filterData" function
  const checkLength = (value, element) => {
    return value.length > 0 ? value : element;
  };

  //The function is responsible for changing  "companies" state in a proper way
  const filterData = (country, industry) => {
    setCompanies((state) => ({
      ...state,
      searched: state.all.filter(
        (el) =>
          el.country === checkLength(country, el.country) &&
          el.industry === checkLength(industry, el.industry)
      ),
    }));
  };

  //The function sorts data in "companies" state by name
  const sortByName = () => {
    setCompanies((state) => ({
      ...state,
      searched: state.searched.sort((prev, next) => {
        if (prev.name.toLowerCase() < next.name.toLowerCase()) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (prev.name.toLowerCase() > next.name.toLowerCase()) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      }),
    }));
  };

  //The function sorts data in "companies" state by number of employees
  const sortByEmployees = () => {
    setCompanies((state) => ({
      ...state,
      searched: state.searched.sort((a, b) =>
        sortConfig.direction === "ascending"
          ? a.numberOfEmployees - b.numberOfEmployees
          : b.numberOfEmployees - a.numberOfEmployees
      ),
    }));
  };

  //The function is used during submit event in <Results/> component
  const handleSubmit = (country, industry, sortField, sortDirection) => {
    filterData(country, industry);
    setSortConfig((state) => ({
      field: sortField,
      direction: sortDirection,
    }));
  };

  useEffect(
    () =>
      getData()
        .then((res) => {
          setCompanies({
            all: res,
            searched: res,
          });
        })
        .catch((error) => handleErrors(error, setError)),
    []
  );

  useEffect(() => {
    if (sortConfig.field.length > 0 && sortConfig.direction.length > 0) {
      sortConfig.field === "name" ? sortByName() : sortByEmployees();
    }
  }, [sortConfig]);

  return (
    <div className={styles.wrap}>
      {error.length === 0 ? (
        <>
          <Results results={companies.searched} />
          <SearchBar
            allCompanies={companies.all}
            createUniques={createUniques}
            handleSubmit={handleSubmit}
          />
        </>
      ) : (
        <Error message={error} />
      )}
    </div>
  );
};

export default App;
