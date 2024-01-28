import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './styles/Footer.scss';
import { ButtonComponent } from '../../../buttons';
import { CentralButton } from '../../../buttons/CentralButton/CentralButton';

const cnFooter = cn('Footer');

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = (props) => {
  return (
    <div className={cnFooter(undefined, [props.className])}>
      <ButtonComponent to={'/'}>1</ButtonComponent>
      <CentralButton to={'/'} className={cnFooter('CentralButton')} />
      <ButtonComponent to={'/'}>3</ButtonComponent>
    </div>
  );
};
