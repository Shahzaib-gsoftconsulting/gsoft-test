// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
import Button from './button_component';

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  storyName: "Button",
  args: {
    className: "",
    disabled: false,
    onClick: () => alert("clicked"),
    text: "Button"
  },
};

export const Secondary: Story = {
  storyName: "Button",
  args: {
    className: "",
    disabled: false,
    onClick: () => alert("clicked"),
    text: "Button"
  },
};
