import type { Meta } from '@storybook/react';

import { DatePickerComponent } from './DatePickerComponent';

const meta: Meta<typeof DatePickerComponent> = {
  component: DatePickerComponent,
  title: 'Inputs/DatePickerComponent',
};
export default meta;

export const Primary = {
  args: {
    label: 'Datepicker Component',
  },
};
