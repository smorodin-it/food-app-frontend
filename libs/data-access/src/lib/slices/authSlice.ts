import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { parseJwt } from '../utils/functions';

interface Payload extends Record<string, unknown> {
  email: string;
  exp: number;
  id: string;
}

export interface AuthState {
  isAuth: boolean;
  token: string | null;
  tokenPayload: Payload | null;
}

const initialState: AuthState = {
  isAuth: false,
  token: null,
  tokenPayload: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.tokenPayload = parseJwt<Payload>(action.payload);
    },
    setAuthUser: (state, action: PayloadAction<AuthState>) => {
      state = action.payload;
    },
    clearAuth: (state) => {
      state.isAuth = false;
      state.token = null;
      state.tokenPayload = null;
    },
  },
});

export const { setAuth, setToken, setAuthUser, clearAuth } = authSlice.actions;

export default authSlice.reducer;
