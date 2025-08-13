
import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: "player",
    initialState: {
        currentSong: {},
        isPlaying: false,
        currentTime: 0,
        duration: 0,
        volume: 1,
        repeat: 'all',
        shuffle: false,
    },
    reducers: {
        setCurrentSong: (state, action) => {
            state.currentSong = action.payload;
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        setCurrentTime: (state, action) => {
            state.currentTime = action.payload;
        },
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
        setVolume: (state, action) => {
            state.volume = action.payload;
        },
        setRepeat: (state, action) => {
            state.repeat = action.payload;
        },
        setShuffle: (state, action) => {
            state.shuffle = action.payload;
        }
    }
})

export const playerActions = playerSlice.actions;
export const playerReducer = playerSlice.reducer;

console.log("Player Slice", playerSlice);