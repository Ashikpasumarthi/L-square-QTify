import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



// Second thunk: fetch spotify songs
export const fetchSpotifySongs = createAsyncThunk(
    "spotifySongs",
    async ({ query, type, token }, thunkAPI) => {
        try {
            // First get the token
            // const tokenResponse = await thunkAPI.dispatch(fetchToken()).unwrap(); // unwrap is used to get the token value

            // Then fetch songs
            console.log("Fetching Spotify songs with token:", token);
            const response = await axios.get(
                "https://qtify-music-app-backend.el.r.appspot.com/api/spotify/search",
                {
                    params: {
                        query: query,
                        type: type,
                    },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            return response.data;
        } catch (err) {
            console.error("Error fetching Spotify songs:", err);
            return thunkAPI.rejectWithValue(err.response?.data || "Error");
        }
    }
);

const spotifySongs = createSlice({
    name: "spotifySongs",
    initialState: {
        songs: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
        setSongs: (state, action) => {
            state.songs = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSpotifySongs.pending, (state) => {
                console.log("Fetching Spotify songs...");
                state.isLoading = true;
            })
            .addCase(fetchSpotifySongs.fulfilled, (state, action) => {
                console.log("Fetched Spotify songs:", action.payload);
                state.songs = action.payload.albums.items;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchSpotifySongs.rejected, (state, action) => {
                console.log("Fetching Spotify songs failed...", action.payload);
                state.isError = true;
                state.isLoading = false;
            });
    },
});

export const spotifySongsActions = spotifySongs.actions;
export default spotifySongs.reducer;

