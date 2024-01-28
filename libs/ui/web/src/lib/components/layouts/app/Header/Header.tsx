import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './styles/Header.scss';

const cnHeader = cn('Header');

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  return <div className={cnHeader(undefined, [props.className])}>Header</div>;
};
