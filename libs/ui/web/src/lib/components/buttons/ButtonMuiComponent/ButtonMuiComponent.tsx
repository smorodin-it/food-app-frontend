import { ComponentProps, FC } from 'react';
import { cn } from '@bem-react/classname';
import { Button } from '@mui/material';

// import './styles/ButtonMuiComponent.scss';

const cnButtonMuiComponent = cn('ButtonMuiComponent');

type ButtonMuiComponentProps = ComponentProps<typeof Button>;

export const ButtonMuiComponent: FC<ButtonMuiComponentProps> = (props) => {
  return <Button {...props} />;
};
