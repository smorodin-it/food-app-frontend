import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/sign-in')({
  component: () => 'sign-in',
});
