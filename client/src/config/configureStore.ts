import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { usersSlice } from '@reducers/users.reducers';

const reducer = combineReducers({
    userReducer: usersSlice.reducer,
});

const preloadedState = {};

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    preloadedState
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;