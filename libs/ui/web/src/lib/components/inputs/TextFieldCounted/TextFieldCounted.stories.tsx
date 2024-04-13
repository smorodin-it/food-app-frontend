import type { Meta } from '@storybook/react';

import { TextFieldCounted } from './TextFieldCounted';

const meta: Meta<typeof TextFieldCounted> = {
  component: TextFieldCounted,
  title: 'Inputs/TextFieldCounted',
};
export default meta;

export const Primary = {
  args: {
    maxLength: 20,
    value: 'text',
    label: 'Text field with counter',
  },
};
