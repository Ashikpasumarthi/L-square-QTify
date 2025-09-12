import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducerMappings from "./Reducers/rootReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { encryptTransform } from 'redux-persist-transform-encrypt';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['topAlbums', 'newAlbums', 'player'] // exclusively persisting topAlbums and newAlbums slices

}
const rootReducer = combineReducers(reducerMappings);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const qtifyStore = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: persistedReducer,
});

const persistor = persistStore(qtifyStore);

export { qtifyStore, persistor };

// export default { qtifyStore, persistor };

