import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#9c27b0",
    },
    info: {
      main: "#fff",
    },
  },
});
