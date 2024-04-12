import { DatePicker } from '@mui/x-date-pickers';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Inputs/DatePicker',
};
export default meta;
type Story = StoryObj<typeof DatePicker>;

const label = 'Выберите дату';

export const Primary: Story = {
  args: {
    label,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByLabelText(label)).toBeTruthy();
  },
};
