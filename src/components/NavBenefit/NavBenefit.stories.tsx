import type { Meta, StoryObj } from "@storybook/react";

import { NavBenefit as B } from "./NavBenefit.tsx";

const meta: Meta<typeof B> = {
  component: B,
  title: "components/NavBenefit",
  args: {
    title: "Example title",
  },
};

export default meta;
type Story = StoryObj<typeof B>;

export const Primary: Story = {
  render: () => <B />,
};
