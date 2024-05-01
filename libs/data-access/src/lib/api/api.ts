import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import {
  AuthModel,
  IngredientAddEditModel,
  IngredientListModel,
  ResponseAddModel,
  ResponseStatusModel,
} from '../models';
import { RootState } from '../stores';
import { clearAuth, setAuth, setToken } from '../slices';
import { API_CONST, API_METHODS, HTTP_STATUS_CODES } from '../constants';

const baseQuery = fetchBaseQuery({
  baseUrl: API_CONST.baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set(API_CONST.authHeader, token);
    }
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (
    typeof args === 'object' &&
    'url' in args &&
    args.url === API_CONST.authRoute
  ) {
    const authToken = result?.meta?.response?.headers.get(API_CONST.authHeader);

    if (authToken) {
      api.dispatch(setToken(authToken));
      api.dispatch(setAuth(true));
    } else {
      api.dispatch(clearAuth());
    }
  }

  if (result.error && result.error.status === HTTP_STATUS_CODES.unauthorized) {
    try {
      // try to get a new token
      const refreshResult = await baseQuery(
        {
          url: API_CONST.refreshRoute,
          method: API_METHODS.post,
        },
        api,
        extraOptions
      );
      if (refreshResult) {
        const authToken = refreshResult?.meta?.response?.headers.get(
          API_CONST.authHeader
        );

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
    } catch {
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
    authUser: build.mutation<ResponseStatusModel, AuthModel>({
      query: (arg) => ({
        url: API_CONST.authRoute,
        method: API_METHODS.post,
        body: arg,
      }),
    }),
    refreshTokens: build.mutation<ResponseStatusModel, void>({
      query: () => ({
        url: API_CONST.refreshRoute,
        method: API_METHODS.post,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { meta } = await queryFulfilled;

          if (
            meta &&
            'response' in meta &&
            meta.response &&
            typeof meta.response === 'object' &&
            'headers' in meta.response &&
            meta.response.headers instanceof Headers
          ) {
            const authToken = meta.response.headers.get(API_CONST.authHeader);

            if (authToken) {
              dispatch(setToken(authToken));
              dispatch(setAuth(true));
            } else {
              dispatch(clearAuth());
            }
          } else {
            dispatch(clearAuth());
          }
        } catch {
          dispatch(clearAuth());
        }
      },
    }),
    listIngredients: build.query<IngredientListModel, void>({
      query: () => ({ url: '/ingredient' }),
    }),
    addIngredient: build.mutation<ResponseAddModel, IngredientAddEditModel>({
      query: (arg) => ({
        url: '/ingredient',
        method: API_METHODS.post,
        body: arg,
      }),
    }),
  }),
});

export const {
  useAuthUserMutation,
  useListIngredientsQuery,
  useAddIngredientMutation,
} = foodAppApi;
