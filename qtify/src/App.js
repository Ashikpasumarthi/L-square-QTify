import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import Audio from "./Components/Audio/audio";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";

import { fetchToken } from "./Slices/token";

const theme = createTheme();

function App() {

  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);
  const status = useSelector((state) => state.token.status);
  useEffect(() => {
    dispatch(fetchToken());
  }, [dispatch]);

  useEffect(() => {
    console.log("Token updated in Redux:", token, "Status:", status);
  }, [token, status]);


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
