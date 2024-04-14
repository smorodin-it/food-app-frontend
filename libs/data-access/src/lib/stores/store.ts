import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../slices';
import { foodAppApi } from '../api';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [foodAppApi.reducerPath]: foodAppApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodAppApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
