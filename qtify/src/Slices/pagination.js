import { createSlice } from "@reduxjs/toolkit";
const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        songsPage: 1
    },
    reducers: {
        setSongsPage: (state, action) => {
            state.songsPage = action.payload;
        }
    }
});

export const paginationSliceReducer = paginationSlice.reducer;
export const { setSongsPage } = paginationSlice.actions;