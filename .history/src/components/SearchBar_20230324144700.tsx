import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { DebouncedFunc } from "lodash";
import {
  getData,
  LocationInterface,
  LocationResponseInterface,
} from "../utils/fetchingData";

interface Props {
  handleSearchValue: (search: string) => void;
  searchValue: string;
  handleData: (response: LocationResponseInterface[]) => void;
  data: LocationResponseInterface[] | null;
  handleLocation: (clickedLocation: LocationInterface) => void;
  fetchedData: LocationResponseInterface[] | null;
}

const SearchBar = ({
  handleSearchValue,
  fetchedData,
  searchValue,
  handleData,
  data,
  handleLocation,
}: Props) => {
  const [searchOn, setSearchOn] = useState(false);
  const completeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (completeRef.current) {
        if (!completeRef?.current?.contains(e.target as Node)) {
          setSearchOn(false);
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <Box sx={{ minWidth: "400px", position: "relative" }}>
      <TextField
        id="search-bar"
        className="text"
        autoComplete="off"
        value={searchValue}
        onFocus={() => setSearchOn(true)}
        onChange={(e) => {
          handleSearchValue(e.target.value);
        }}
        label="Enter a city name"
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={{
          width: "100%",
          height: "100%",
          transition: "all 0.3s ease",
          label: {
            color: "white",
          },
          input: {
            color: "white",
          },
          "& .MuiInputLabel-root": { color: "white" },
          field: {
            borderColor: "white",
          },
          fieldset: {
            borderColor: "white",
          },
          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
              borderColor: "white",
            },
          },
          "& label.Mui-focused": {
            color: "white",
          },
          // focused color for input with variant='standard'
          "& .MuiInput-underline:after": {
            borderBottomColor: "white",
          },
          // focused color for input with variant='filled'
          "& .MuiFilledInput-underline:after": {
            borderBottomColor: "white",
          },
          // focused color for input with variant='outlined'
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
      />
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: "2%",
          transform: "translate(0, -50%)",
        }}
        aria-label="search">
        <SearchIcon style={{ fill: "white" }} />
      </IconButton>
      {data && searchOn && (
        <Box
          ref={completeRef}
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "100%",
            left: 0,
            background: "white",
            width: "100%",
            textAlign: "left",
            pt: 2,
          }}>
          {data &&
            data?.map((item: LocationResponseInterface) => (
              <div key={Math.random() * 10000}>
                <Typography
                  onClick={() => {
                    handleLocation({
                      lat: item.lat,
                      lon: item.lon,
                      name: item.name,
                      country: item.country,
                      state: item.state,
                    });
                  }}
                  sx={{
                    pl: 3,
                    color: "black",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      background: "#24adf180",
                    },
                  }}
                  variant="body1"
                  paragraph>
                  {item.name}, {item.country}, {item.state}
                </Typography>
              </div>
            ))}
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
