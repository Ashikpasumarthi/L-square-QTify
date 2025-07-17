import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
const theme = createTheme(); // this gives default MUI theme

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        
        <Navbar />
        <Outlet />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
