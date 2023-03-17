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
            backgroundColor: "yellow",
          },
        }}
      />
      <Sidebar />
    </div>
  );
}

export default App;
