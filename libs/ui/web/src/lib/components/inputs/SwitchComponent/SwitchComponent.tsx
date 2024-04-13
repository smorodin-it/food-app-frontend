import React, { ComponentProps, FC } from 'react';
import { cn } from '@bem-react/classname';
import { FormControlLabel, Switch, Tooltip } from '@mui/material';

const cnSwitchComponent = cn('SwitchComponent');

interface SwitchComponentProps {
  checked: ComponentProps<typeof Switch>['checked'];
  label: ComponentProps<typeof FormControlLabel>['label'];
  onChange: ComponentProps<typeof Switch>['onChange'];
  className?: string;
  color?: ComponentProps<typeof Switch>['color'];
  disabled?: ComponentProps<typeof FormControlLabel>['disabled'];
  size?: ComponentProps<typeof Switch>['size'];
  tooltipText?: string;
}

export const SwitchComponent: FC<SwitchComponentProps> = (props) => {
  const switchComponent = (
    <FormControlLabel
      className={cnSwitchComponent(undefined, [props.className])}
      control={
        <Switch
          checked={props.checked}
          onChange={props.onChange}
          color={props.color}
          size={props.size}
        />
      }
      label={props.label}
      disabled={props.disabled}
    />
  );

  return props.tooltipText ? (
    <Tooltip title={props.tooltipText}>
      <span>{switchComponent}</span>
    </Tooltip>
  ) : (
    switchComponent
  );
};
