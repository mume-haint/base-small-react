import type {PayloadAction} from '@reduxjs/toolkit'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {login, logout, profile} from "../../api/auth.ts";
import {AuthUserData, LoginFormProps} from "../../types/auth.ts";
import {setAccessToken} from "src/utils/jwt.ts";

export interface AuthState {
    isAuthenticated: boolean,
    user: AuthUserData
}

interface AuthResponse {
    data: {
        username: string,
        display_name: string,
        avatar: string,
    },
    accessToken: string,
    status: number,
    error: boolean,
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: {
        username: '',
        display_name: '',
        avatar: ''
    }
}

export const authProfile = createAsyncThunk<AuthResponse, unknown>('auth/profile', async (_data: unknown, thunkAPI) => {
    try {
        const response = await profile() as AuthResponse;
        if (response?.error) {
            throw new Error('Fetch profile error');
        }
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue('Failed to fetch user');
    }
});

export const loginUser = createAsyncThunk<AuthResponse, LoginFormProps>('auth/login', async (data: LoginFormProps, thunkAPI) => {
    try {
        const response = await login(data.username, data.password) as AuthResponse;
        if (response?.error) {
            throw new Error('Fetch profile error');
        }
        setAccessToken(response?.accessToken);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue('Failed to login');
    }
});

export const logoutUser = createAsyncThunk<unknown, unknown>('auth/logout', async (_, thunkAPI) => {
    try {
        const response = await logout();
        setAccessToken(null);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue('Failed to logout');
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        init: (state) => {
            state.isAuthenticated = false
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
            .addCase(authProfile.pending, () => {

            })
            .addCase(authProfile.fulfilled, (state, action) => {
                state.user = action.payload.data;
                state.isAuthenticated = true;
                console.log('extra reducer', state.isAuthenticated)
            })
            .addCase(authProfile.rejected, () => {

            })
            .addCase(loginUser.pending, () => {

            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.data;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, () => {
            })
            .addCase(logoutUser.pending, () => {

            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isAuthenticated = false;
            })
            .addCase(logoutUser.rejected, () => {
            });

    },
})

export const { init, update } = authSlice.actions
export default authSlice.reducer