import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
// Typed versions of useDispatch and useSelector hooks

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// This code creates typed versions of the useDispatch and useSelector hooks to ensure type safety when interacting with the Redux store.