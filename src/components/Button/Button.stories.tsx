import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button as B } from "./Button";

const meta: Meta<typeof B> = {
  component: B,
  title: "components/Button",
};

export default meta;
type Story = StoryObj<typeof B>;

export const SmallButton: Story = {
  render: (args) => <B {...args}>Primary Button</B>,
  args: {
    size: "small",
  },
};

export const MediumButton: Story = {
  render: (args) => <B {...args}>Primary Button</B>,
  args: {
    size: "medium",
  },
};
export const LargeButton: Story = {
  render: (args) => <B {...args}>Primary Button</B>,
  args: {
    size: "large",
  },
};
export const FullwidthButton: Story = {
  render: (args) => <B {...args}>Primary Button</B>,
  args: {
    size: "fullWidth",
  },
};

export const BoldFontButton: Story = {
  render: (args) => <B {...args}>Primary Button</B>,
  args: {
    bold: true,
  },
};
