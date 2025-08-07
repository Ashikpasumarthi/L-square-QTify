import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducerMappings from "./Reducers/rootReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { encryptTransform } from 'redux-persist-transform-encrypt';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['navigation'],

}
const rootReducer = combineReducers(reducerMappings);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const qtifyStore = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(qtifyStore);

export { qtifyStore, persistor };

// export default { qtifyStore, persistor };

