import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './styles/AppLayout.scss';
import { Header, HeaderLinkList } from '../Header';
import { Footer } from '../Footer';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Container } from '@mui/material';

const cnAppLayout = cn('AppLayout');

interface AppLayoutProps {
  links: HeaderLinkList;
  className?: string;
}

export const AppLayout: FC<AppLayoutProps> = (props) => {
  return (
    <div className={cnAppLayout(undefined, [props.className])}>
      <Header links={props.links} />
      <Container
        className={cnAppLayout('Main')}
        component={'main'}
        maxWidth={'xl'}
      >
        <Outlet />
      </Container>
      <Footer />
      <TanStackRouterDevtools />
    </div>
  );
};
