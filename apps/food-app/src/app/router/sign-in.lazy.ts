import { createLazyFileRoute } from '@tanstack/react-router';
import { SignInModule } from '../modules';

export const Route = createLazyFileRoute('/sign-in')({
  component: SignInModule,
});
