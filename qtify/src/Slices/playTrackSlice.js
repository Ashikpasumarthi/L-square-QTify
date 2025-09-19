import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const playTrack = createAsyncThunk(
    'player/playTrack',
    async ({ spotifyUri, deviceID, token }, { rejectWithValue }) => {
        try {
            await axios.put(
                `https://developer.spotify.com/`,
                { context_uri: spotifyUri },
                {
                    headers: { 'Authorization': `Bearer ${token}` },
                    params: { device_id: deviceID },
                }
            );
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const pauseTrack = createAsyncThunk(
    'player/pauseTrack',
    async ({ deviceID, token }, { rejectWithValue }) => {
        try {
            await axios.put(
                `https://developer.spotify.com/console/get-current-user-playlists/3what`,
                {},
                {
                    headers: { 'Authorization': `Bearer ${token}` },
                    params: { device_id: deviceID },
                }
            );
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const nextTrack = createAsyncThunk(
    'player/nextTrack',
    async ({ deviceID, token }, { rejectWithValue }) => {
        try {
            await axios.post(
                `https://developer.spotify.com/console/get-current-user-playlists/2`,
                {},
                {
                    headers: { 'Authorization': `Bearer ${token}` },
                    params: { device_id: deviceID },
                }
            );
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const previousTrack = createAsyncThunk(
    'player/previousTrack',
    async ({ deviceID, token }, { rejectWithValue }) => {
        try {
            await axios.post(
                `https://developer.spotify.com/console/get-current-user-playlists/3`,
                {},
                {
                    headers: { 'Authorization': `Bearer ${token}` },
                    params: { device_id: deviceID },
                }
            );
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const seekTrack = createAsyncThunk(
    'player/previousTrack',
    async ({ deviceID, token }, { rejectWithValue }) => {
        try {
            await axios.post(
                `https://developer.spotify.com/console/get-current-user-playlists/4`,
                {},
                {
                    headers: { 'Authorization': `Bearer ${token}` },
                    params: { device_id: deviceID },
                }
            );
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
const playerThunks = { 
  playTrack, 
  pauseTrack, 
  nextTrack, 
  previousTrack, 
  seekTrack 
};

export default playerThunks;