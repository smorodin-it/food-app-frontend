import { ComponentProps, FC } from 'react';
import {
  Controller,
  ControllerRenderProps,
  useFormContext,
} from 'react-hook-form';
import { cn } from '@bem-react/classname';

import { CheckboxComponent } from '../../inputs';

const cnCheckboxFormComponent = cn('CheckboxFormComponent');

type CheckboxFormComponentProps = Omit<
  ComponentProps<typeof CheckboxComponent>,
  keyof ControllerRenderProps | 'checked'
> & { name: string };

export const CheckboxFormComponent: FC<CheckboxFormComponentProps> = (
  props
) => {
  const { name, ...rest } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...restField } }) => (
        <CheckboxComponent
          {...rest}
          {...restField}
          checked={value}
          className={cnCheckboxFormComponent(undefined, [props.className])}
          error={!!error}
          helperText={error?.message && String(error?.message)}
        />
      )}
    />
  );
};
