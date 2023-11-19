import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
    action: {
      active: "#FF9B05",
      selected: "#3DBCF9",
    },
    primary: {
      main: "#ECF7FF",
    },
    secondary: {
      main: "#00288A",
      "100": "#113A9F70",
      "300": "#3DBCF9",
    },
    text: {
      primary: "#113A9F",
      secondary: "#A6B9D6",
    },
    common: {
      white: "#FFF",
    },

    background: { paper: "#00288A", default: "#ECF7FF" },
    error: {
      main: red.A400,
    },
  },
});
export default theme;
