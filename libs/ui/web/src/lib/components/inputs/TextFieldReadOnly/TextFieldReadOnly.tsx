import { ComponentProps, FC } from 'react';
import { cn } from '@bem-react/classname';
import { TextField } from '@mui/material';

const cnTextFieldReadOnly = cn('TextFieldReadOnly');

type TextFieldReadOnlyProps = Omit<
  ComponentProps<typeof TextField>,
  'InputProps'
>;

export const TextFieldReadOnly: FC<TextFieldReadOnlyProps> = (props) => {
  return (
    <TextField
      {...props}
      className={cnTextFieldReadOnly(undefined, [props.className])}
      InputProps={{
        readOnly: true,
      }}
    />
  );
};
