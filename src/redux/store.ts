import {configureStore} from '@reduxjs/toolkit';
import authReducer from "./slices/authReducer.ts";
import toastReducer from "./slices/toastReducer.ts";
import {authApi} from "./api/authApi.ts";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    toast: toastReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;