import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const store = configureStore({
    reducer,
    middleware: [thunkMiddleware],
    devTools: process.env.NODE_ENV !== "production",
});

export { store };