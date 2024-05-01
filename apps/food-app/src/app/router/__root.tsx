import { createRootRoute } from '@tanstack/react-router';
import { AppLayout } from '@food-frontend/ui';
import { HEADER_MENU_CONST } from '../constants/menuConstants';

export const Route = createRootRoute({
  component: () => <AppLayout links={HEADER_MENU_CONST} />,
});
