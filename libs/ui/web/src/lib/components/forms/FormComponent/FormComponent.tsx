import { FC, ReactNode } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { cn } from '@bem-react/classname';
import { Stack } from '@mui/material';

import './styles/FormComponent.scss';
import { ButtonMuiComponent } from '../../buttons';

const cnFormComponent = cn('FormComponent');

interface FormComponentProps {
  methods: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  children: ReactNode | ReactNode[];
  className?: string;
  withFormButtons?: boolean;
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

          {props.withFormButtons && (
            <Stack direction={'row'}>
              <ButtonMuiComponent
                type={'submit'}
                disabled={props.methods.formState.isSubmitting}
              >
                Отправить
              </ButtonMuiComponent>
            </Stack>
          )}
        </Stack>
      </FormProvider>
    </div>
  );
};
