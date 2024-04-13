import {
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
  CircularProgress,
  TextField,
} from '@mui/material';

import { DefaultUniqueIdentifier } from './constants';
import { BaseAutocompleteProps, MinimalAutocompleteDataOption } from './types';

interface BaseAutocompleteSingleProps<T> extends BaseAutocompleteProps<T> {
  value: string | null;
  onChange: (valueId: string | null, option: T | null, reason: string) => void;
  onFocus?: () => void;
}

function BaseAutocompleteSingleInner<T extends MinimalAutocompleteDataOption>(
  props: BaseAutocompleteSingleProps<T>,
  ref: Ref<unknown>
): ReactElement {
  const handleGetValue = (): T | null => {
    let result = null;
    if (props.value) {
      result =
        props.options.find(
          (option) =>
            option[props.uniqueIdentifierField ?? DefaultUniqueIdentifier] ===
            props.value
        ) ?? null;
    }

    return result;
  };

  const handleChange = (
    _: SyntheticEvent,
    value: T | null,
    reason: AutocompleteChangeReason
  ): void => {
    props.onChange(value?.id ?? null, value, reason);
  };

  return (
    <Autocomplete<T, false, false>
      ref={ref}
      onBlur={props.onBlur}
      filterOptions={props.filterOptions}
      options={props.options}
      value={handleGetValue()}
      onChange={handleChange}
      onFocus={props.onFocus}
      isOptionEqualToValue={(option) =>
        option[props.uniqueIdentifierField ?? DefaultUniqueIdentifier] ===
        props.value
      }
      getOptionLabel={(option) =>
        props.getOptionLabel
          ? props.getOptionLabel(option)
          : (option[props.fieldWithLabel] as string)
      }
      groupBy={props.groupBy}
      filterSelectedOptions={props.filterSelectedOptions}
      disabled={props.disabled}
      getOptionDisabled={props.getOptionDisabled}
      loading={props.loading}
      loadingText={'Загрузка...'}
      noOptionsText={'Ничего не найдено!'}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          required={props.required}
          error={props.error}
          helperText={props.helperText}
          placeholder={props.placeholder}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {props.loading ? (
                  <CircularProgress color={'primary'} size={20} />
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
    />
  );
}

export const BaseAutocompleteSingle = forwardRef(
  BaseAutocompleteSingleInner
) as <T>(
  props: BaseAutocompleteSingleProps<T> & { ref?: ForwardedRef<unknown> }
) => ReturnType<typeof BaseAutocompleteSingleInner>;
