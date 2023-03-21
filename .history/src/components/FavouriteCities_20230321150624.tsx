import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const FavouriteCities = () => {
  const [cities, setCities] = useState(["Oslo", "Paris", "Kraków"]);
  const [input, setInput] = useState("");

  return (
    <Box>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log("enter press here! ");
          }
        }}
      />
      {cities?.map((city: string) => (
        <Typography>{city}</Typography>
      ))}
    </Box>
  );
};

export default FavouriteCities;
