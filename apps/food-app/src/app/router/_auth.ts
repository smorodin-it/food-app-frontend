import { createFileRoute, redirect } from '@tanstack/react-router';
import { RootState, store } from '@food-frontend/data-access';

export const Route = createFileRoute('/_auth')({
  beforeLoad: (opts) => {
    const isAuth = (store.getState() as RootState).auth.isAuth;
    if (!isAuth) {
      throw redirect({
        to: '/sign-in',
        search: {
          redirect: opts.location.href,
        },
      });
    }
  },
});
