import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { CheckboxComponent } from './CheckboxComponent';

const meta: Meta<typeof CheckboxComponent> = {
  component: CheckboxComponent,
  title: 'Inputs/CheckboxComponent',
};
export default meta;
type Story = StoryObj<typeof CheckboxComponent>;

const label = 'Checkbox label';

export const Primary: Story = {
  args: {
    label,
    checked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(label)).toBeTruthy();
  },
};

export const Checked: Story = {
  args: {
    label,
    checked: true,
  },
};
