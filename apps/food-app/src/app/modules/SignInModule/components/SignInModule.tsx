import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Paper } from '@mui/material';

// import './styles/SignInModule.scss';

const cnSignInModule = cn('SignInModule');

interface SignInModuleProps {
  className?: string;
}

export const SignInModule: FC<SignInModuleProps> = (props) => {
  return (
    <Paper
      className={cnSignInModule(undefined, [props.className])}
      elevation={0}
    >
      SignInModule
    </Paper>
  );
};
