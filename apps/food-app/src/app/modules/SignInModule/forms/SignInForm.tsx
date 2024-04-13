import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { FormComponent } from '@food-frontend/ui';
import { useForm } from 'react-hook-form';
import { SignInFormFields } from './SignInFormFields';

// import './styles/SignInForm.scss';

const cnSignInForm = cn('SignInForm');

interface SubmitData {
  email: string;
  password: string;
}

interface SignInFormProps {
  className?: string;
}

export const SignInForm: FC<SignInFormProps> = (props) => {
  const methods = useForm<SubmitData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async (data: SubmitData): Promise<void> => {
    console.log(data);
  };

  return (
    <FormComponent
      className={cnSignInForm(undefined, [props.className])}
      methods={methods}
      onSubmit={handleSubmit}
    >
      <SignInFormFields />
    </FormComponent>
  );
};
