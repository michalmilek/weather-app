import React from "react";
import Box from "@mui/material/Box";
import Image1 from "./Image1.jpg";
import Typography from "@mui/material/Typography";

const MainContent = () => {
  return (
    <Box
      sx={{
        marginTop: "50px",
        maxWidth: "100vw",
        overflow: "hidden",
        position: "relative",
      }}>
      <img
        style={{ position: "absolute", top: 0, left: 0 }}
        src={Image1}
        alt="background"
      />
    </Box>
  );
};

export default MainContent;
