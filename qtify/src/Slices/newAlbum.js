import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//createSlice internally uses immer to allow for mutable state updates
export const fetchNewAlbums = createAsyncThunk('fetchNewAlbums', async () => {
    try {
        const response = await fetch('https://qtify-backend-labs.crio.do/albums/new');
        console.log("Response from new albums API", response);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching new albums:", error);
        throw error;
    }
})

console.log("First ever newAlbumSlice thunk", fetchNewAlbums);
const newAlbumSlice = createSlice({
    name: 'newAlbums',
    initialState: {
        newAlbums: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        setNewAlbums: (state, action) => {
            state.newAlbums = [...state.newAlbums, action.payload];      //when individual album is added
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNewAlbums.fulfilled, (state, action) => {
            state.newAlbums = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchNewAlbums.pending, (state, action) => {
            console.log("Fetching new albums...",action.payload);
            state.isLoading = true;
        })
        builder.addCase(fetchNewAlbums.rejected, (state, action) => {
            console.log("Fetching new albums...", action.payload);
            state.isError = true;
        })
    }

})

console.log("First ever newAlbumSlice", newAlbumSlice);

const { setNewAlbums, setLoading } = newAlbumSlice.actions;
export { setNewAlbums, setLoading };

// export default newAlbumSlice;  // entire slice object is exported
export const newAlbumsSliceReducer = newAlbumSlice.reducer;