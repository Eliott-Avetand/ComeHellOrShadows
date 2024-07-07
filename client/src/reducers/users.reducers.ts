import { createSlice } from '@reduxjs/toolkit';

import { login, logout, register } from "@actions/users.actions";
import { ApiError, User } from '@/types';

import { ReducerState } from './reducers.types';

// Get token to see if the session of the user is still up
const token = localStorage.getItem('token');

// State of the user reducer
export interface UserState extends ReducerState {
    isAuthenticated: boolean,
    profile: User
}

// Defaults variable
const defaultUser: User = {
    username: "",
    email: ""
}

const defaultApiError: ApiError = {
    message: ""
}

const initialState: UserState = {
    error: defaultApiError,
    action: "",
    isAuthenticated: token ? true : false,
    profile: defaultUser
}

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Login user
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.isAuthenticated = true,
            state.profile = payload
        })
        builder.addCase(login.rejected, (state, action) => {
            if (action.payload)
                state.error = action.payload
        })
        // Register user
        builder.addCase(register.fulfilled, (state, { payload }) => {
            state.isAuthenticated = true,
            state.error = {},
            state.profile = payload
        })
        builder.addCase(register.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload.message
            } else {
                state.error = action.error
            }
        })
        // Logout user
        builder.addCase(logout.fulfilled, (state) => {
            state.isAuthenticated = false,
            state.error = {}
        })
        builder.addCase(logout.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload.message
            } else {
                state.error = action.error
            }
        })
    },
})