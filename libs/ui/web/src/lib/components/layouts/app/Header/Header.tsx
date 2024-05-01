import { ReactElement } from 'react';
import { cn } from '@bem-react/classname';

import './styles/Header.scss';
import { AnyRoute, Link, RoutePaths } from '@tanstack/react-router';
import { Typography } from '@mui/material';

import { Restaurant as RestaurantIcon } from '@mui/icons-material';

const cnHeader = cn('Header');

interface HeaderLink<RouteTree extends AnyRoute> {
  title: string;
  to: RoutePaths<RouteTree>;
}

export type HeaderLinkList<RouteTree extends AnyRoute> =
  HeaderLink<RouteTree>[];

interface HeaderProps<RouteTree extends AnyRoute> {
  links: HeaderLinkList<RouteTree>;
  className?: string;
}

export function Header<RouteTree extends AnyRoute>(
  props: HeaderProps<RouteTree>
): ReactElement {
  return (
    <div className={cnHeader(undefined, [props.className])}>
      <div className={cnHeader('Container')}>
        <Link className={cnHeader('Link')} to={'/'}>
          <RestaurantIcon />
          <Typography variant={'h6'}>Food App</Typography>
        </Link>
        {props.links.map((link, idx) => (
          <Link key={idx} className={cnHeader('Link')} to={link.to!}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
