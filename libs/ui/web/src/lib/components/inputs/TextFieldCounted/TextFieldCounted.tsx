import {
  ChangeEvent,
  ChangeEventHandler,
  ComponentProps,
  forwardRef,
} from 'react';
import { cn } from '@bem-react/classname';
import { InputAdornment, TextField, Typography } from '@mui/material';

const cnTextFieldCounted = cn('TextFieldCounted');

type TextFieldCountedProps = {
  value: string;
  maxLength?: number;
  numeric?: boolean;
} & Omit<ComponentProps<typeof TextField>, 'InputProps'>;

export const TextFieldCounted = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldCountedProps
>((props, ref) => {
  const { maxLength: propsMaxLength, numeric: propsNumeric, ...rest } = props;
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | void => {
    if (props.onChange) {
      if (propsNumeric && event.target.value.match(/[^0-9]/)) {
        return;
      }

      return props.onChange(event);
    }
  };

  return (
    <TextField
      {...rest}
      onChange={handleChange}
      className={cnTextFieldCounted(undefined, [props.className])}
      inputProps={{
        maxLength:
          propsMaxLength && propsMaxLength > 0 ? propsMaxLength : undefined,
      }}
      InputProps={{
        ref: ref,
        endAdornment: !!props.maxLength && (
          <InputAdornment position={'end'}>
            <Typography>
              {props.value.length}/{props.maxLength}
            </Typography>
          </InputAdornment>
        ),
      }}
    />
  );
});
