import { createLazyFileRoute } from '@tanstack/react-router';
import { SignInForm } from '../modules/SignInModule/forms';

export const Route = createLazyFileRoute('/sign-in')({
  component: SignInForm,
});
