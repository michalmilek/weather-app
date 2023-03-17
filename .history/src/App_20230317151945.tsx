import GlobalStyles from "@mui/material/GlobalStyles";
import React, { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <MainContent />
      <Navbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  );
}

export default App;
