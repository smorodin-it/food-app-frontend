import { FC, ReactNode } from 'react';
import { cn } from '@bem-react/classname';

import './styles/AppLayout.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Outlet } from '@tanstack/react-router';

const cnAppLayout = cn('AppLayout');

interface AppLayoutProps {
  className?: string;
}

export const AppLayout: FC<AppLayoutProps> = (props) => {
  return (
    <div className={cnAppLayout(undefined, [props.className])}>
      <Header />
      <main className={cnAppLayout('Main')}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
