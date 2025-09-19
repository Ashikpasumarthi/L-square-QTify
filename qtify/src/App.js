import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import Audio from "./Components/Audio/audio";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import { setDeviceID } from "./Slices/webPackSDK";

const theme = createTheme();

function App() {
  const userToken = useSelector((state) => state.spotifyAccessToken.spotifyAccessToken)
  const [player, setPlayer] = React.useState(null);
  const [deviceId, setDeviceId] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!userToken) return;

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const spotifyPlayer = new window.Spotify.Player({
        name: "Qtify Web Player",
        getOAuthToken: cb => { cb(userToken); },
        volume: 0.5
      });

      spotifyPlayer.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        setDeviceId(device_id);
        console.log(deviceId);
        dispatch(setDeviceID(device_id));
      });

      spotifyPlayer.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });
      spotifyPlayer.connect();
      setPlayer(spotifyPlayer);
    }

    return () => {
      if (player) {
        player.disconnect();
      }

    }
  }, [userToken]);

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
