import { FC, ReactNode } from 'react';
import { cn } from '@bem-react/classname';

import './styles/ButtonComponent.scss';

const cnFooterButton = cn('ButtonComponent');

interface FooterButtonProps {
  children: ReactNode;
  to: string;
  className?: string;
}

export const ButtonComponent: FC<FooterButtonProps> = (props) => {
  return (
    <a className={cnFooterButton(undefined, [props.className])} href={props.to}>
      {props.children}
    </a>
  );
};
