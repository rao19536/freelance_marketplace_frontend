import { configureStore } from "@reduxjs/toolkit";
import { reducers, middlewares } from "./combineSlices";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});

export default store;
