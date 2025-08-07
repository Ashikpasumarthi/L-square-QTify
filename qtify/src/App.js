import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
const theme = createTheme(); // this gives default MUI theme

function App() {
  const state = useSelector((state) => state);
console.log("App component rendered", state);
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
