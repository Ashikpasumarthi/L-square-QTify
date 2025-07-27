import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTabs = createAsyncThunk('fetchTABS', async () => {
    try {
        const response = await fetch('https://qtify-backend-labs.crio.do/genres');
        console.log("Response from TABS API", response);
        const data = await response.json();
        console.log(Array.isArray(data))
        return data;
    } catch (error) {
        console.error("Error fetching TABS:", error);
        throw error;
    }
})

console.log("FETCH TABS THUNK", fetchTabs);

const tabsSlice = createSlice({
    name: 'tabs',
    initialState: {
        tabs: []
    },
    reducers: {
        setTabs: (state, action) => {
            state.tabs = [...state.tabs, action.payload]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTabs.fulfilled, (state, action) => {
            state.tabs = action.payload.data;
        });
        builder.addCase(fetchTabs.pending, (state, action) => {
            console.log("Fetching TABS...");
        });
        builder.addCase(fetchTabs.rejected, (state, action) => {
            console.log("Error fetching TABS", action.payload);
        });
    }
})

console.log("Tab Slice", tabsSlice);

const { setTabs } = tabsSlice.actions;
export { setTabs };

export const tabsSliceReducer = tabsSlice.reducer;
