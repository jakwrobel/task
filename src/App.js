import React from "react"
import {Searchbar} from "./components/searchbar/Searchbar"
import {Results} from "./components/results/Results"
const App = () => {
  return <div className="App">
    <Searchbar/>
    <Results/>
  </div>;
};

export default App;
