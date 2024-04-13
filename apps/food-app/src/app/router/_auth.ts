import { createFileRoute, redirect } from '@tanstack/react-router';

const isAuth = true;

export const Route = createFileRoute('/_auth')({
  beforeLoad: (opts) => {
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
