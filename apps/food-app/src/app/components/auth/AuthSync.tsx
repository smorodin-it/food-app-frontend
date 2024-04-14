import { FC } from 'react';
import { useAppSelector } from '@food-frontend/data-access';
import { Navigate, Outlet } from '@tanstack/react-router';

export const AuthSync: FC = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return isAuth ? <Outlet /> : <Navigate to={'/sign-in'} />;
};
