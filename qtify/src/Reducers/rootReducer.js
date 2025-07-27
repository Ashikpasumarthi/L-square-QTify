
import { topAlbumSliceReducer } from '../Slices/topAlbums';
import { tabsSliceReducer } from '../Slices/tabSlice';

const reducerMappings = {
    topAlbums: topAlbumSliceReducer,
    tabs : tabsSliceReducer,
}

export default reducerMappings;