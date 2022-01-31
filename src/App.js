import React, { useState, useEffect } from "react";
import { getData } from "./utils/getData";
import { Searchbar } from "./components/searchbar/Searchbar";
import { Results } from "./components/results/Results";
const App = () => {
  const [companies, setCompanies] = useState();

  useEffect(() => getData().then((res) => setCompanies(res)), []);
  console.log("stejt:", companies);

  getData();
  return (
    <div className="App">
      <Searchbar />
      <Results />
    </div>
  );
};

export default App;
