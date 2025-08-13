
import { topAlbumSliceReducer } from '../Slices/topAlbums';
import { tabsSliceReducer } from '../Slices/tabSlice';
import { newAlbumsSliceReducer } from '../Slices/newAlbum';
import { paginationSliceReducer } from '../Slices/pagination';
import { playerReducer } from '../Slices/playerSlice';

const reducerMappings = {
    topAlbums: topAlbumSliceReducer,
    tabs: tabsSliceReducer,
    newAlbums: newAlbumsSliceReducer,
    player: playerReducer,
    pagination: paginationSliceReducer,

}

export default reducerMappings;