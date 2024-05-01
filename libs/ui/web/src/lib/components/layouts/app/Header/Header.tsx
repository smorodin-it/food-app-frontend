import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './styles/Header.scss';
import { Link } from '@tanstack/react-router';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

import { Restaurant as RestaurantIcon } from '@mui/icons-material';

const cnHeader = cn('Header');

interface HeaderLink {
  title: string;
  to: string;
}

export type HeaderLinkList = HeaderLink[];

interface HeaderProps {
  links: HeaderLinkList;
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <AppBar className={cnHeader(undefined, [props.className])}>
      <Container maxWidth={'xl'}>
        <Toolbar disableGutters>
          <Link className={cnHeader('Link')} to={'/'}>
            <RestaurantIcon />
            <Typography variant={'h6'}>Food App</Typography>
          </Link>
          {props.links.map((link) => (
            <Link key={link.to} className={cnHeader('Link')} to={link.to}>
              {link.title}
            </Link>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
