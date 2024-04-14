import { createFileRoute } from '@tanstack/react-router';
import { AuthSync } from '../components';

export const Route = createFileRoute('/_auth')({
  // beforeLoad: (opts) => {
  //   const isAuth = (store.getState() as RootState).auth.isAuth;
  //   if (!isAuth) {
  //     throw redirect({
  //       to: '/sign-in',
  //       search: {
  //         redirect: opts.location.href,
  //       },
  //     });
  //   }
  // },
  component: AuthSync,
});
