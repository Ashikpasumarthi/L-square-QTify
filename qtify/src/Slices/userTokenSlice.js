import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch Spotify token
export const fetchUserToken = createAsyncThunk(
    "userToken/fetchUserToken",
    async (code, thunkAPI) => {
        try {
            const response = await axios.post(
                "https://qtify-music-app-backend.el.r.appspot.com/api/spotify/login",
                { code }
            );
            console.log("Token response from backend:", response.data);
            
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || "Failed to fetch token");
        }
    }
);

console.log("First ever token thunk", fetchUserToken);

const userTokenSlice = createSlice({
    name: "userToken",
    initialState: { tokenValue: null, status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserToken.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUserToken.fulfilled, (state, action) => {
                console.log("checking payload", action.payload)
                state.tokenValue = action.payload.access_token || action.payload;
                const oldToken = state.tokenValue;
                const newToken = action.payload.access_token || action.payload;

                if (oldToken !== newToken) {
                    state.tokenValue = newToken;
                    console.log("Token updated in Redux:", state.tokenValue);
                }


                console.log("Old token:", oldToken, "New token:", newToken);
                state.status = "succeeded";
            })
            .addCase(fetchUserToken.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});
export const userTokenReducer = userTokenSlice.reducer;