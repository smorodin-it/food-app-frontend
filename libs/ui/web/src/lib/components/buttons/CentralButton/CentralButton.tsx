import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './styles/CentralButton.scss';

const cnCentralButton = cn('CentralButton');

interface CentralButtonProps {
  to: string;
  className?: string;
}

export const CentralButton: FC<CentralButtonProps> = (props) => {
  return (
    <a
      className={cnCentralButton(undefined, [props.className])}
      href={props.to}
    >
      <div className={cnCentralButton('Icon')} />
    </a>
  );
};
