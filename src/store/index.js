import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import movieSlice from "./slices/movieSlice";

import movie from './slices/movieSlice'

const store = configureStore({
    reducer:{
        movie: movieSlice
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store