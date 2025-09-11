import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import Audio from "./Components/Audio/audio";
import 'bootstrap/dist/css/bootstrap.min.css';



const theme = createTheme();

function App() {

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
