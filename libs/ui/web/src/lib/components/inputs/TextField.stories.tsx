import { TextField } from '@mui/material';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Inputs/TextField',
};
export default meta;
type Story = StoryObj<typeof TextField>;

const label = 'Текстовое поле';

export const Primary: Story = {
  args: {
    label,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByLabelText(label)).toBeTruthy();
  },
};
