import type {PayloadAction} from '@reduxjs/toolkit'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {login, profile} from "../../api/auth.ts";
import {AuthUserData, LoginFormProps} from "../../types/auth.ts";

export interface AuthState {
    isAuthenticated: false,
    isInitialized: false,
    user: AuthUserData
}

interface AuthResponse {
    data: {
        username: string,
        display_name: string,
        avatar: string,
    },
    status: number,
    error: boolean,
}



const initialState: AuthState = {
    isAuthenticated: false,
    isInitialized: false,
    user: {
        username: 'test user',
        display_name: 'test display user',
        avatar: 'https://picsum.photos/200/200'
    }
}



export const authProfile = createAsyncThunk<AuthResponse, unknown>('auth/profile', async (data: unknown, thunkAPI) => {
    try {
        const response = await profile();
        if (response?.error) {
            throw new Error('Fetch profile error');
        }
        return response?.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Failed to fetch user');
    }
});

export const loginUser = createAsyncThunk<AuthResponse, LoginFormProps>('auth/login', async (data: LoginFormProps, thunkAPI) => {
    try {
        const response = await login(data.username, data.password);
        if (response?.error) {
            throw new Error('Fetch profile error');
        }
        localStorage.setItem('accessToken', response?.accessToken)
        return response?.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Failed to login');
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        init: (state) => {
            state.isAuthenticated = false
            state.isInitialized = false
            state.user = {
                username: 'test',
                display_name: 'test display',
                avatar: 'https://picsum.photos/200/200'
            }
        },
        update: (state, action: PayloadAction<AuthUserData>) => {
            state.user = {
                username:  action.payload.username,
                display_name:  action.payload.display_name,
                avatar:  action.payload.avatar
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authProfile.pending, (state) => {

            })
            .addCase(authProfile.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(authProfile.rejected, (state, action) => {

            })
            .addCase(loginUser.pending, (state) => {

            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {

            });

    },
})

export const { init, update } = authSlice.actions
export default authSlice.reducer