import { createSlice } from '@reduxjs/toolkit';

const spotifyTokenSlice = createSlice({
    name: 'spotifyAccessToken',
    initialState: {
        spotifyAccessToken: null,
        spotifyTokenExpiresIn: null,
        isLoading: false,
        isError: false
    },
    reducers: {
        setSpotifyAccessToken: (state, action) => {
            state.spotifyAccessToken = action.payload;
            localStorage.setItem('spotify_access_token', action.payload);

        },
        setSpotifyTokenExpiresIn: (state, action) => {
            state.spotifyTokenExpiresIn = action.payload;
            localStorage.setItem('spotify_token_expires_in', action.payload);
        },
    }
});


console.log("First ever spotifyTokenSlice", spotifyTokenSlice);


export const { setSpotifyAccessToken, setSpotifyTokenExpiresIn } = spotifyTokenSlice.actions;


export default spotifyTokenSlice.reducer;