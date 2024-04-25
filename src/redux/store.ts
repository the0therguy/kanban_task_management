import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";

// Create the Redux store
export const store = configureStore({
    reducer: {}, // Add your reducers here
});

// Setup listeners for refetch behaviors
setupListeners(store.dispatch);

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// In this code snippet, configureStore is used to create the Redux store, and setupListeners is called to handle refetchOnFocus and refetchOnReconnect behaviours.