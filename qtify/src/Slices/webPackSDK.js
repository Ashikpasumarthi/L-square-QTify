import { createSlice } from '@reduxjs/toolkit';

const webpackSlice = createSlice({
    name: 'webPackSDK',
    initialState: {
        deviceID: null,
    },
    reducers: {
        setDeviceID: (state, action) => {
            state.deviceID = action.payload;
        },

    },

}
);


console.log("First ever webpackSlice", webpackSlice);


export const { setDeviceID } = webpackSlice.actions;


export default webpackSlice.reducer;