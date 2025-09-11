import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch Spotify token
export const fetchToken = createAsyncThunk(
    "token/fetchToken",
    async () => {
        const response = await axios.post("http://localhost:5000/api/spotify/token");
        console.log("Token response from backend:", response.data);
        return response.data; // store token string
    }
);

console.log("First ever token thunk", fetchToken);

const tokenSlice = createSlice({
    name: "token",
    initialState: { value: null, status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchToken.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchToken.fulfilled, (state, action) => {
                console.log("checking payload",action.payload)
                state.value = action.payload.access_token || action.payload;
                const oldToken = state.value;
                const newToken = action.payload.access_token || action.payload;

                if (oldToken !== newToken) {
                    state.value = newToken;
                    console.log("Token updated in Redux:", state.value);
                }


                console.log("Old token:", oldToken, "New token:", newToken);
                state.status = "succeeded";
            })
            .addCase(fetchToken.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});
export const tokenReducer = tokenSlice.reducer;