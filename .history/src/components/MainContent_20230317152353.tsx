import React from "react";
import Box from "@mui/material/Box";
import Image1 from "./Image1.jpg";
import Typography from "@mui/material/Typography";

const MainContent = () => {
  return (
    <Box sx={{ marginTop: "100px" }}>
      {/* <img
        src={Image1}
        alt="background"
      /> */}
      <Typography
        variant="h1"
        color="initial">
        FSAFSA
      </Typography>
    </Box>
  );
};

export default MainContent;
