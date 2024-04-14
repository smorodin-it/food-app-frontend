import { FC } from 'react';
import { TextFieldFormComponent } from '@food-frontend/ui';
import { Button } from '@mui/material';

interface SignInFormFieldsProps {
  disabled: boolean;
  className?: string;
}

export const SignInFormFields: FC<SignInFormFieldsProps> = (props) => {
  return (
    <>
      <TextFieldFormComponent
        label={'email'}
        name={'email'}
        disabled={props.disabled}
      />
      <TextFieldFormComponent
        label={'password'}
        name={'password'}
        disabled={props.disabled}
      />
      <Button variant={'contained'} type={'submit'} disabled={props.disabled}>
        Submit
      </Button>
    </>
  );
};
