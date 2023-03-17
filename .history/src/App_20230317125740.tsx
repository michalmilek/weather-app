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
            backgroundColor: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          },
        }}
      />
      <Sidebar />
    </div>
  );
}

export default App;
