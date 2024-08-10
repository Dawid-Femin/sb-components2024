import type { Meta, StoryObj } from "@storybook/react";

import { Header as H } from "./Header";

const meta: Meta<typeof H> = {
  component: H,
  title: "components/Header",
};

export default meta;
type Story = StoryObj<typeof H>;

export const Primary: Story = {
  render: () => <H />,
};
