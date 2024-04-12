import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { SwitchComponent } from './SwitchComponent';

const meta: Meta<typeof SwitchComponent> = {
  component: SwitchComponent,
  title: 'Inputs/SwitchComponent',
};
export default meta;

type Story = StoryObj<typeof SwitchComponent>;

const label = 'Test Label';

export const Primary: Story = {
  args: {
    label: label,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(label)).toBeTruthy();
  },
};
