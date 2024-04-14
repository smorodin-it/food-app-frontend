import { createFileRoute } from '@tanstack/react-router';
import { AuthSync } from '../components';
import { foodAppApi, RootState, store } from '@food-frontend/data-access';

export const Route = createFileRoute('/_auth')({
  beforeLoad: async () => {
    // Try refresh tokens and get access
    if (!(store.getState() as RootState).auth.isAuth) {
      await store.dispatch(foodAppApi.endpoints.refreshTokens.initiate());
    }
  },
  component: AuthSync,
});
