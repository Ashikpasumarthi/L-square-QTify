import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch Spotify token
export const fetchToken = createAsyncThunk(
    "token/fetchToken",
    async () => {
        const response = await axios.post("http://localhost:5000/api/spotify/token");
        console.log("Token response from backend:", response.data);
        return response.data // store token string
    }
);

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
                state.status = "succeeded";
                state.value = action.payload.access_token;
                console.log('Actions testing :', action);
                console.log("Token stored in Redux:", state.value);
            })
            .addCase(fetchToken.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});
export default tokenSlice.reducer;