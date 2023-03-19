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
        style={{ position: "absolute" }}
        src={Image1}
        alt="background"
      />
    </Box>
  );
};

export default MainContent;
