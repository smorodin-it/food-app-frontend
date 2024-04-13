import { FC } from 'react';
import { cn } from '@bem-react/classname';

// import './styles/SignInForm.scss';

const cnSignInForm = cn('SignInForm');

interface SignInFormProps {
  className?: string;
}

export const SignInForm: FC<SignInFormProps> = (props) => {
  return <div className={cnSignInForm(undefined, [props.className])}></div>;
};
