import React from "react";
import Box from "@mui/material/Box";
import Image1 from "./Image1.jpg";
import Typography from "@mui/material/Typography";


const MainContent = ({ data }: any) => {
  return (
    <Box
      sx={{
        minHeight: "1080px",
        marginTop: "50px",
        maxWidth: "100vw",
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${Image1})`,
      }}></Box>
  );
};

export default MainContent;
