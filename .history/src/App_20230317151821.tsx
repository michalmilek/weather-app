import GlobalStyles from "@mui/material/GlobalStyles";
import React, { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <Navbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MainContent />
    </div>
  );
}

export default App;
