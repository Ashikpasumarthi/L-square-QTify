
import { topAlbumSliceReducer } from '../Slices/topAlbums';
import { tabsSliceReducer } from '../Slices/tabSlice';
import { newAlbumsSliceReducer } from '../Slices/newAlbum';

const reducerMappings = {
    topAlbums: topAlbumSliceReducer,
    tabs : tabsSliceReducer,
    newAlbums : newAlbumsSliceReducer,

}

export default reducerMappings;