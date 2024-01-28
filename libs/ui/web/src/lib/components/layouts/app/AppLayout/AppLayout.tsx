import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './styles/AppLayout.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';

const cnAppLayout = cn('AppLayout');

interface AppLayoutProps {
  className?: string;
}

export const AppLayout: FC<AppLayoutProps> = (props) => {
  return (
    <div className={cnAppLayout(undefined, [props.className])}>
      <Header />
      <main className={cnAppLayout('Main')}>Main</main>
      <Footer />
    </div>
  );
};
