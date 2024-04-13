import { ComponentProps, forwardRef } from 'react';
import { cn } from '@bem-react/classname';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import 'dayjs/locale/ru';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/Moscow');

const cnDatePickerComponent = cn('DatePickerComponent');

export const DatePickerComponent = forwardRef<
  HTMLInputElement,
  // FIXME: Change from any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ComponentProps<typeof DatePicker<any>>
>((props, ref) => {
  return (
    <DatePicker
      {...props}
      inputRef={ref}
      value={props.value ? dayjs(props.value).tz('Europe/Moscow') : null}
      onChange={(value, context) => {
        if (props.onChange) {
          props.onChange(
            value
              ? dayjs(value as string)
                  .tz('Europe/Moscow')
                  .format()
              : null,
            context
          );
        }
      }}
      className={cnDatePickerComponent(undefined, [props.className])}
    />
  );
});
