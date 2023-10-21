import {transaction} from './../../services/api/transaction';
import {AnyAction, ThunkDispatch, configureStore} from '@reduxjs/toolkit';
import authReducer from '../slices/authReducer';
import type {TypedUseSelectorHook} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import informationReducer from '../slices/informationReducer';
import transactionReducer from '../slices/transactionReducer';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    // reducer for slice goes here
    auth: authReducer,
    information: informationReducer,
    transaction: transactionReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware() // prepend and concat calls can be chained
      .concat(logger),
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();

export default store;
