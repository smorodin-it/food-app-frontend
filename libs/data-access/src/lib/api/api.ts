import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { AuthModel, IngredientListModel } from '../models';
import { RootState } from '../stores';
import { clearAuth, setAuth, setToken } from '../slices';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('Authorization', token);
    }
  },
  credentials: 'same-origin',
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (typeof args === 'object' && 'url' in args && args.url === '/auth') {
    const authToken = result?.meta?.response?.headers.get('Authorization');

    if (authToken) {
      api.dispatch(setToken(authToken));
      api.dispatch(setAuth(true));
    } else {
      api.dispatch(clearAuth());
    }
  }

  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery(
      {
        url: '/auth/refresh',
        method: 'POST',
      },
      api,
      extraOptions
    );
    if (refreshResult) {
      const authToken =
        refreshResult?.meta?.response?.headers.get('Authorization');

      if (authToken) {
        // store the new token
        api.dispatch(setToken(authToken));

        // retry the initial query
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(clearAuth());
      }
    } else {
      api.dispatch(clearAuth());
    }
  }
  return result;
};

export const foodAppApi = createApi({
  reducerPath: 'foodApp',
  baseQuery: baseQueryWithReauth,
  keepUnusedDataFor: 0,
  endpoints: (build) => ({
    authUser: build.mutation<string | null, AuthModel>({
      query: (arg) => ({
        url: '/auth',
        method: 'POST',
        body: arg,
      }),
    }),
    listIngredients: build.query<IngredientListModel, void>({
      query: () => ({ url: '/ingredient' }),
    }),
  }),
});

export const { useAuthUserMutation, useListIngredientsQuery } = foodAppApi;
