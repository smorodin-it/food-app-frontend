import React, {
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
  Ref,
  SyntheticEvent,
} from 'react';
import {
  Autocomplete,
  AutocompleteChangeReason,
  Chip,
  CircularProgress,
  TextField,
} from '@mui/material';
import { AutocompleteRenderGetTagProps } from '@mui/material/Autocomplete/Autocomplete';

import { DefaultUniqueIdentifier } from './constants';
import { BaseAutocompleteProps, MinimalAutocompleteDataOption } from './types';

interface BaseAutocompleteMultipleProps<T> extends BaseAutocompleteProps<T> {
  value: string[];
  onChange: (valueIds: string[], options: T[], reason: string) => void;
  renderTags?: (
    value: T[],
    getTagProps: AutocompleteRenderGetTagProps
  ) => ReactNode;
}

function BaseAutocompleteMultipleInner<T extends MinimalAutocompleteDataOption>(
  props: BaseAutocompleteMultipleProps<T>,
  ref: Ref<unknown>
): ReactElement {
  const handleGetValue = (): T[] => {
    return props.options.filter((option) =>
      props.value.includes(
        option[props.uniqueIdentifierField ?? DefaultUniqueIdentifier] as string
      )
    );
  };

  const handleChange = (
    _: SyntheticEvent,
    values: T[],
    reason: AutocompleteChangeReason
  ): void => {
    props.onChange(
      values.map(
        (val) =>
          val[props.uniqueIdentifierField ?? DefaultUniqueIdentifier] as string
      ),
      values,
      reason
    );
  };

  return (
    <Autocomplete<T, true, false>
      ref={ref}
      onBlur={props.onBlur}
      filterOptions={props.filterOptions}
      multiple
      options={props.options}
      value={handleGetValue()}
      onChange={handleChange}
      getOptionDisabled={props.getOptionDisabled}
      disabled={props.disabled}
      getOptionLabel={(option) =>
        props.getOptionLabel
          ? props.getOptionLabel(option)
          : (option[props.fieldWithLabel] as string)
      }
      groupBy={props.groupBy}
      filterSelectedOptions={props.filterSelectedOptions}
      loading={props.loading}
      loadingText={'Загрузка...'}
      noOptionsText={'Ничего не найдено!'}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={props.placeholder}
          label={props.label}
          required={props.required}
          error={props.error}
          helperText={props.helperText}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {props.loading ? (
                  <CircularProgress color={'inherit'} size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(renderProps, option) =>
        props.renderOption ? (
          props.renderOption(renderProps, option)
        ) : (
          <li
            {...renderProps}
            key={
              option[
                props.uniqueIdentifierField ?? DefaultUniqueIdentifier
              ] as string
            }
          >
            {props.getOptionLabel
              ? props.getOptionLabel(option)
              : (option[props.fieldWithLabel] as ReactNode)}
          </li>
        )
      }
      renderTags={(values, getTagProps) =>
        props.renderTags
          ? props.renderTags(values, getTagProps)
          : values.map((value, idx) => (
              <Chip
                {...getTagProps({
                  index: idx,
                })}
                label={value[props.fieldWithLabel] as string}
              />
            ))
      }
    />
  );
}

export const BaseAutocompleteMultiple = forwardRef(
  BaseAutocompleteMultipleInner
) as <T>(
  props: BaseAutocompleteMultipleProps<T> & { ref?: ForwardedRef<unknown> }
) => ReturnType<typeof BaseAutocompleteMultipleInner>;
