import React from "react"
import {Searchbar} from "./components/searchbar/Searchbar"
import {Results} from "./components/results/Results"
import styles from "./styles/styles.scss"
const App = () => {
  return <div className="App">
    <Searchbar/>
    <Results/>
  </div>;
};

export default App;
