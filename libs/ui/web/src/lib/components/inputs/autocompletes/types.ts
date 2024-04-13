import { ComponentProps, ReactNode } from 'react';
import { Autocomplete } from '@mui/material';

export interface MinimalAutocompleteDataOption extends Record<string, unknown> {
  id: string;
}

export interface BaseAutocompleteProps<T> {
  options: ComponentProps<typeof Autocomplete<T>>['options'];

  fieldWithLabel: string;
  error?: boolean;
  helperText?: string;
  label?: string;
  loading?: boolean;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  renderOption?: (props: Object, option: T, state?: Object) => ReactNode;
  required?: boolean;
  uniqueIdentifierField?: keyof T;

  className?: ComponentProps<typeof Autocomplete<T>>['className'];
  disabled?: ComponentProps<typeof Autocomplete<T>>['disabled'];
  filterOptions?: ComponentProps<typeof Autocomplete<T>>['filterOptions'];
  filterSelectedOptions?: ComponentProps<
    typeof Autocomplete<T>
  >['filterSelectedOptions'];
  getOptionDisabled?: ComponentProps<
    typeof Autocomplete<T>
  >['getOptionDisabled'];
  getOptionLabel?: ComponentProps<typeof Autocomplete<T>>['getOptionLabel'];
  groupBy?: ComponentProps<typeof Autocomplete<T>>['groupBy'];
  onBlur?: ComponentProps<typeof Autocomplete<T>>['onBlur'];
}
