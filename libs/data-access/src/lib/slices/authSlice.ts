import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Payload = Record<string, unknown> | null;

export interface AuthState {
  isAuth: boolean;
  token: string | null;
  payload: Payload;
}

const initialState: AuthState = {
  isAuth: false,
  token: null,
  payload: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setPayload: (state, action: PayloadAction<Payload>) => {
      state.payload = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setAuthUser: (state, action: PayloadAction<AuthState>) => {
      state = action.payload;
    },
    clearAuth: (state) => {
      state.isAuth = false;
      state.token = null;
      state.payload = null;
    },
  },
});

export const { setAuth, setPayload, setToken, setAuthUser, clearAuth } =
  authSlice.actions;

export default authSlice.reducer;
