import { ReactElement } from 'react';
import { cn } from '@bem-react/classname';

import './styles/AppLayout.scss';
import { Header, HeaderLinkList } from '../Header';
import { Footer } from '../Footer';
import { AnyRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const cnAppLayout = cn('AppLayout');

interface AppLayoutProps<RouteTree extends AnyRoute> {
  links: HeaderLinkList<RouteTree>;
  className?: string;
}

export function AppLayout<RouteTree extends AnyRoute>(
  props: AppLayoutProps<RouteTree>
): ReactElement {
  return (
    <div className={cnAppLayout(undefined, [props.className])}>
      <Header links={props.links} />
      <main className={cnAppLayout('Main')}>
        <Outlet />
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </div>
  );
}
