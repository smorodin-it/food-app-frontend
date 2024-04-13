import { FC, ReactNode } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { cn } from '@bem-react/classname';
import { Stack } from '@mui/material';

import './styles/FormComponent.scss';

const cnFormComponent = cn('FormComponent');

interface FormComponentProps {
  methods: UseFormReturn;
  onSubmit: () => void;
  children: ReactNode | ReactNode[];
  className?: string;
}

export const FormComponent: FC<FormComponentProps> = (props) => {
  return (
    <div className={cnFormComponent(undefined, props.className)}>
      <FormProvider {...props.methods}>
        <Stack
          component={'form'}
          noValidate
          onSubmit={props.methods.handleSubmit(props.onSubmit)}
          onReset={() => {
            props.methods.reset();
          }}
        >
          {props.children}
        </Stack>
      </FormProvider>
    </div>
  );
};
