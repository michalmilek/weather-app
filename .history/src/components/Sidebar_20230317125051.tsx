import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 150,
        height: "90vh",
        position: "fixed",
        top: "5vh",
        left: "5vw",
        background: "rgba(138, 131, 134, 0.5)",
        borderRadius: 50,
        backdropFilter: "blur(20px)",
      }}>
      <Typography
        variant="subtitle1"
        color="white">
        Weather app
      </Typography>
    </Box>
  );
};

export default Sidebar;
