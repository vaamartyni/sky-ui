import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, IButton } from "../src/Button";

const meta: Meta = {
  title: 'SKY Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template: Story<IButton> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const SKYButtonDefault = Template.bind({});

SKYButtonDefault.args = {
  onClick:() => console.log('Sky button'),
  children: 'SkyButton',
  disabled: false,
  variant: "primary"
} as IButton;
