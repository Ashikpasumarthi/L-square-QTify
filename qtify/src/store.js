import { configureStore } from "@reduxjs/toolkit";
import reducerMappings from "./Reducers/rootReducer";

const qtifyStore = configureStore({
    reducer: reducerMappings,
});

export default qtifyStore;

