import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { BaseAutocompleteMultiple } from './BaseAutocompleteMultiple';

const meta: Meta<typeof BaseAutocompleteMultiple> = {
  component: BaseAutocompleteMultiple,
  title: 'Inputs/BaseAutocompleteMultiple',
};
export default meta;
type Story = StoryObj<typeof BaseAutocompleteMultiple>;

const options = Array(10)
  .fill(null)
  .map((_, idx) => ({
    id: `${idx}`,
    title: `Element - ${idx}`,
  }));

const label = 'Multiple Autocomplete';

export const Primary: Story = {
  args: {
    label,
    options,
    fieldWithLabel: 'title',
    value: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByLabelText(label)).toBeTruthy();
  },
};
