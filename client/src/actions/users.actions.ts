import { createAsyncThunk } from '@reduxjs/toolkit';

import { userService } from '@services/users.services';
import { ApiError, User } from '@/types';

export const login = createAsyncThunk<
    User,
    { email: string, password: string },
    {
        rejectValue: ApiError
    }
    >('user/login', async (credentials, thunkAPI) => {
        return userService.login(credentials)
            .catch((err: ApiError) => thunkAPI.rejectWithValue(err));
    })

export const logout = createAsyncThunk<
    void,
    void,
    {
        rejectValue: Error
    }
    >('user/logout', async (_, thunkAPI) => {
        return userService.logout()
            .then(res => res)
            .catch(err => thunkAPI.rejectWithValue(err));
    })


export const register = createAsyncThunk<
    User,
    { email: string, password: string },
    {
        rejectValue: Error
    }
    >('user/register', async (credentials, thunkAPI) => {
        return userService.register(credentials)
            .then(res => res)
            .catch(err => thunkAPI.rejectWithValue(err));
    })
