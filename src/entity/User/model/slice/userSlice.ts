import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { LocalStorageKeys } from '@/shared/const/localStorageKeys';

const initialState: UserSchema = {
    authData: undefined,

    _mounted: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(LocalStorageKeys.AUTH_DATA);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._mounted = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LocalStorageKeys.AUTH_HEADER_VALUE);
            localStorage.removeItem(LocalStorageKeys.AUTH_DATA);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
