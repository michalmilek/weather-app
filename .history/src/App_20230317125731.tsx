import GlobalStyles from "@mui/material/GlobalStyles";
import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <GlobalStyles
        styles={{
          body: {
            backgroundColor:
              "linear-gradient(168deg, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 45%, rgba(27,26,46,1) 86%)",
          },
        }}
      />
      <Sidebar />
    </div>
  );
}

export default App;
