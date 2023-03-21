import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const FavouriteCities = () => {
  const [cities, setCities] = useState(["Oslo", "Paris", "Kraków"]);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("Cities", JSON.stringify(cities));
  }, [cities]);

  return (
    <Box>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setCities([...cities, input]);
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
