
import { topAlbumSliceReducer } from '../Slices/topAlbums';
import { tabsSliceReducer } from '../Slices/tabSlice';
import { newAlbumsSliceReducer } from '../Slices/newAlbum';
import { paginationSliceReducer } from '../Slices/pagination';

const reducerMappings = {
    topAlbums: topAlbumSliceReducer,
    tabs: tabsSliceReducer,
    newAlbums: newAlbumsSliceReducer,
    pagination: paginationSliceReducer,

}

export default reducerMappings;