import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import Audio from "./Components/Audio/audio";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";

const theme = createTheme();

function App() {
  // Select only what you need
  const token = useSelector(state => state.token.value);

  useEffect(() => {
    console.log("App component rendered, token:", token);
  }, [token]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={ theme }>
        <Navbar />
        <Outlet />
        <Audio />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
