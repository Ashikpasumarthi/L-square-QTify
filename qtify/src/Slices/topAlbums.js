import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//createSlice internally uses immer to allow for mutable state updates
export const fetchTopAlbums = createAsyncThunk('fetchTopAlbums', async () => {
    try {
        const response = await fetch('https://qtify-backend-labs.crio.do/albums/top');
        console.log("Response from top albums API", response);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching top albums:", error);
        throw error;
    }
})

console.log("First ever topAlbumSlice thunk", fetchTopAlbums);
const topAlbumSlice = createSlice({
    name: 'topAlbums',
    initialState: {
        topAlbums: [],
        isLoading: false,
        isError: false,
        status: 'idle'
    },
    reducers: {
        setTopAlbums: (state, action) => {
            console.log("Payload being added to topAlbums:", action.payload);
            state.topAlbums = [...state.topAlbums, action.payload]     //when individual album is added
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopAlbums.fulfilled, (state, action) => {
            state.topAlbums = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchTopAlbums.pending, (state, action) => {
            console.log("Fetching top albums...");
            state.isLoading = true;
        })
        builder.addCase(fetchTopAlbums.rejected, (state, action) => {
            console.log("Fetching top albums...", action.payload);
            state.isError = true;
        })
    }

})

console.log("First ever topAlbumSlice", topAlbumSlice);

const { setTopAlbums, setLoading } = topAlbumSlice.actions;
export { setTopAlbums, setLoading };

// export default topAlbumSlice;  // entire slice object is exported
export const topAlbumSliceReducer = topAlbumSlice.reducer;