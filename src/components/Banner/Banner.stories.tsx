import type { Meta, StoryObj } from "@storybook/react";

import { Banner as H } from "./Banner";

const meta: Meta<typeof H> = {
  component: H,
  title: "components/Banner",
  args: {
    title: "Want a custom website tailored to your needs?",
    description: "We have helped hundreds of founders with their website needs. Let's talk",
    buttonContent: "Click to see more!"
  }
};

export default meta;
type Story = StoryObj<typeof H>;

export const Primary: Story = {
  render: (args) => <H {...args} />,
};
