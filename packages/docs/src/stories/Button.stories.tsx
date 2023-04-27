import { StoryObj, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@ignite-ui/react';

export default {
  component: Button,
  title: 'Form/Button',
  args: {
    children: 'Enviar',
  },
} as Meta;

export const Primary: StoryObj<ButtonProps> = {};
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
};
