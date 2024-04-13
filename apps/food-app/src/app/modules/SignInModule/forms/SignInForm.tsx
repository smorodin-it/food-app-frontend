import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { FormComponent } from '@food-frontend/ui';
import { useForm } from 'react-hook-form';
import { SignInFormFields } from './SignInFormFields';
import { AuthModel, useAuthUserMutation } from '@food-frontend/data-access';
import { useNavigate } from '@tanstack/react-router';

// import './styles/SignInForm.scss';

const cnSignInForm = cn('SignInForm');

interface SignInFormProps {
  className?: string;
}

export const SignInForm: FC<SignInFormProps> = (props) => {
  const methods = useForm<AuthModel>({
    defaultValues: {
      email: 'test@test.loc',
      password: '12332145',
    },
  });

  const [authUser, { isLoading }] = useAuthUserMutation();

  const navigate = useNavigate();

  const handleSubmit = async (data: AuthModel): Promise<void> => {
    const resp = await authUser(data).unwrap();

    if (resp) {
      await navigate({
        to: '/',
      });
    }
  };

  return (
    <FormComponent
      className={cnSignInForm(undefined, [props.className])}
      methods={methods}
      onSubmit={handleSubmit}
    >
      <SignInFormFields disabled={isLoading} />
    </FormComponent>
  );
};
