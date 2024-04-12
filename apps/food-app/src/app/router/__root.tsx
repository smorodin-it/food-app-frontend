import { createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AppLayout } from '@food-frontend/ui';

export const Route = createRootRoute({
  component: () => (
    <>
      <AppLayout />
      <TanStackRouterDevtools />
    </>
  ),
});
