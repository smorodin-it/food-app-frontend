import { ComponentProps, ComponentRef, forwardRef } from 'react';
import { cn } from '@bem-react/classname';
import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';

const cnCheckboxComponent = cn('CheckboxComponent');

interface CheckboxComponentProps {
  checked: ComponentProps<typeof Checkbox>['checked'];
  onChange: ComponentProps<typeof Checkbox>['onChange'];
  label?: ComponentProps<typeof FormControlLabel>['label'];
  name?: ComponentProps<typeof Checkbox>['name'];
  className?: string;
  error?: ComponentProps<typeof FormHelperText>['error'];
  helperText?: string;
}

export const CheckboxComponent = forwardRef<
  ComponentRef<'div'>,
  CheckboxComponentProps
>((props, ref) => {
  const checkbox = (
    <Checkbox
      name={props.name}
      checked={props.checked}
      onChange={props.onChange}
    />
  );

  return (
    <div
      className={cnCheckboxComponent(undefined, [props.className])}
      ref={ref}
    >
      {props.label ? (
        <FormControlLabel control={checkbox} label={props.label} />
      ) : (
        checkbox
      )}

      {props.helperText && (
        <FormHelperText error={props.error}>{props.helperText}</FormHelperText>
      )}
    </div>
  );
});
