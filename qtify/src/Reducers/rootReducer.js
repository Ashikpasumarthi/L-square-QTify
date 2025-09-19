
import { topAlbumSliceReducer } from '../Slices/topAlbums';
import { tabsSliceReducer } from '../Slices/tabSlice';
import { newAlbumsSliceReducer } from '../Slices/newAlbum';
import { paginationSliceReducer } from '../Slices/pagination';
import { playerReducer } from '../Slices/playerSlice';
import spotifySongsReducer from '../Slices/spotifyRealSongs';
import { tokenReducer } from '../Slices/token';
import { userTokenReducer } from '../Slices/userTokenSlice';
import spotifyTokenSliceReducer from '../Slices/spotifyAccessTokenSlice';
import webpackSliceReducer from '../Slices/webPackSDK';

const reducerMappings = {
    topAlbums: topAlbumSliceReducer,
    tabs: tabsSliceReducer,
    newAlbums: newAlbumsSliceReducer,
    spotifySongs: spotifySongsReducer,
    token: tokenReducer,
    player: playerReducer,
    pagination: paginationSliceReducer,
    userToken: userTokenReducer,
    spotifyAccessToken: spotifyTokenSliceReducer,
    webPackSDK: webpackSliceReducer,
};

export default reducerMappings;