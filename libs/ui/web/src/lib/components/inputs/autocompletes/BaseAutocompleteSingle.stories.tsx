import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { BaseAutocompleteSingle } from './BaseAutocompleteSingle';

const meta: Meta<typeof BaseAutocompleteSingle> = {
  component: BaseAutocompleteSingle,
  title: 'Inputs/BaseAutocompleteSingle',
};
export default meta;
type Story = StoryObj<typeof BaseAutocompleteSingle>;

const options = Array(10)
  .fill(null)
  .map((_, idx) => ({
    id: `${idx}`,
    title: `Element - ${idx}`,
  }));

const label = 'Single Autocomplete';

export const Primary: Story = {
  args: {
    label,
    options,
    fieldWithLabel: 'title',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByLabelText(label)).toBeTruthy();
  },
};
