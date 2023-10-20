import {AnyAction, ThunkDispatch, configureStore} from '@reduxjs/toolkit';
import authReducer from '../slices/authReducer';
import type {TypedUseSelectorHook} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: {
    // reducer for slice goes here
    auth: authReducer,
  },
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();

export default store;
