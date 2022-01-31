import React, { useState, useEffect } from "react";
import { getData } from "./utils/getData";
import { SearchBar } from "./components/searchbar/SearchBar";
import { Results } from "./components/results/Results";
const App = () => {
  const [companies, setCompanies] = useState({
    all: [],
    searched: [],
  });

  useEffect(
    () =>
      getData()
        .then((res) => {
          setCompanies({ all: res, searched: res });
        })
        .catch((error) => console.log(error)),
    []
  );

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

  return (
    <div className="App">
      <SearchBar
        allData={companies.all}
        createUniques={createUniques}
        filterData={filterData}
      />
      <Results results={companies.searched} />
    </div>
  );
};

export default App;
