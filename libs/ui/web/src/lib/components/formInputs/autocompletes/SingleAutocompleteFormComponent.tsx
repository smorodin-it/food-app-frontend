import { ComponentProps, ReactElement } from 'react';
import {
  Controller,
  ControllerRenderProps,
  useFormContext,
} from 'react-hook-form';
import { cn } from '@bem-react/classname';

import {
  BaseAutocompleteSingle,
  MinimalAutocompleteDataOption,
} from '../../inputs';

const cnAutocompleteSingleFormComponent = cn('AutocompleteSingleFormComponent');

type AutocompleteSingleFormComponentProps<
  T extends MinimalAutocompleteDataOption
> = Omit<
  ComponentProps<typeof BaseAutocompleteSingle<T>>,
  keyof ControllerRenderProps
> & { name: string };

export function SingleAutocompleteFormComponent<
  T extends MinimalAutocompleteDataOption
>(props: AutocompleteSingleFormComponentProps<T>): ReactElement {
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
        <BaseAutocompleteSingle<T>
          {...rest}
          {...field}
          className={cnAutocompleteSingleFormComponent(
            undefined,
            props.className
          )}
          onFocus={props.onFocus}
          error={!!error}
          helperText={error?.message && String(error.message)}
        />
      )}
    />
  );
}
