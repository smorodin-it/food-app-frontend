import { ComponentProps, FC } from 'react';
import {
  Controller,
  ControllerRenderProps,
  useFormContext,
} from 'react-hook-form';
import { cn } from '@bem-react/classname';

import { TextFieldCounted } from '../../inputs/TextFieldCounted';

const cnTextFieldFormComponent = cn('TextFieldFormComponent');

type TextFieldFormComponentProps = Omit<
  ComponentProps<typeof TextFieldCounted>,
  keyof ControllerRenderProps
> & { name: string };

export const TextFieldFormComponent: FC<TextFieldFormComponentProps> = (
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
      render={({ field }) => (
        <TextFieldCounted
          {...rest}
          {...field}
          className={cnTextFieldFormComponent(undefined, [props.className])}
          error={!!error}
          helperText={error?.message && String(error?.message)}
        />
      )}
    />
  );
};
