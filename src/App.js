import React, { useState, useEffect } from "react";
import { getData } from "./utils/getData";
import { SearchBar } from "./components/searchbar/SearchBar";
import { Results } from "./components/results/Results";
const App = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(
    () =>
      getData()
        .then((res) => setCompanies(res))
        .catch((error) => console.log(error)),
    []
  );

  return (
    <div className="App">
      <SearchBar />
      <Results results={companies} />
    </div>
  );
};

export default App;
