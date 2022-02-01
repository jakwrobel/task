import React, { useState, useEffect } from "react";
import { getData } from "./utils/getData";
import { handleErrors } from "./utils/handleErrors";
import { SearchBar } from "./components/searchbar/SearchBar";
import { Results } from "./components/results/Results";
import { Error } from "./components/error/Error";
import styles from "./App.module.scss"
const App = () => {
  const [companies, setCompanies] = useState({
    all: [],
    searched: [],
  });

  const [sortConfig, setSortConfig] = useState({
    field: "",
    direction: "",
  });

  const [error, setError] = useState("");

  useEffect(
    () =>
      getData()
        .then((res) => {
          setCompanies({
            all: res,
            searched: res,
          });
        })
        .catch((error) => handleErrors(error,setError)),
    []
  );

  useEffect(() => {
    if (sortConfig.field.length > 0 && sortConfig.direction.length > 0) {
      sortConfig.field === "name" ? sortByName() : sortByEmployees();
    }
  }, [sortConfig]);

  const createUniques = (data, propName) => {
    return data
      .map((el) => el[propName])
      .filter((value, index, self) => self.indexOf(value) === index);
  };

  const checkLength = (value, element) => {
    return value.length > 0 ? value : element;
  };

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
        return 0
      }),
    }));
  };

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

  const handleSubmit = (country, industry, sortField, sortDirection) => {
    filterData(country, industry);
    setSortConfig((state) => ({
      field: sortField,
      direction: sortDirection,
    }));
  };

  console.log(companies)
  return (
    <div className="App">
      {error.length === 0 ? (
        <div className={styles.wrap}>
          <Results results={companies.searched} />
          <SearchBar
            allData={companies.all}
            createUniques={createUniques}
            handleSubmit={handleSubmit}
          />

          
        </div>
      ) : (
        <Error message={error}/>
      )}
    </div>
  );
};

export default App;
