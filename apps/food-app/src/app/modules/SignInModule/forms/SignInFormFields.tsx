import { FC } from 'react';
import { TextFieldFormComponent } from '@food-frontend/ui';
import { Button } from '@mui/material';

interface SignInFormFieldsProps {
  className?: string;
}

export const SignInFormFields: FC<SignInFormFieldsProps> = (props) => {
  return (
    <>
      <TextFieldFormComponent label={'email'} name={'email'} />
      <TextFieldFormComponent label={'password'} name={'password'} />
      <Button variant={'contained'} type={'submit'}>
        Submit
      </Button>
    </>
  );
};
