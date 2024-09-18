import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: { main: grey[900] },
    //     secondary: { main: grey[900] },
    //     background: { default: "#eee" },
    //   },
    // },
    dark: true,
  },
  // palette: {
  //   contrastThreshold: 4.5,
  //   primary: { main: grey[900] },
  //   secondary: { main: grey[900] },
  //   background: { default: "#eee" },
  // },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProvider>
  </StrictMode>
);
