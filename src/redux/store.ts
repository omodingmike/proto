import {configureStore} from "@reduxjs/toolkit";

import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {apiSlice} from "./features/api/apiSlice.ts"
import userReducer from "./features/userSlice.ts";
import appReducer from "./features/appSlice.ts";

export const store = configureStore({
    reducer: {
        user: userReducer,
        app: appReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
