import { configureStore } from '@reduxjs/toolkit'
import exampleCounterReducer from './slices/exampleCounterSlice'
import authReducer from './slices/authSlice.ts'

export const store = configureStore({
    reducer: {
        exampleCounter: exampleCounterReducer,
        auth: authReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch