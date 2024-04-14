import { createFileRoute } from '@tanstack/react-router';
import { SignInForm } from '../modules/SignInModule/forms';

export const Route = createFileRoute('/sign-in')({
  component: SignInForm,
});
