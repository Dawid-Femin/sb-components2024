import type { Meta, StoryObj } from "@storybook/react";

import { Nav as N } from "./Nav.tsx";

const meta: Meta<typeof N> = {
  component: N,
  title: "components/Nav",
  args: {
    title: "Example title",
  },
};

export default meta;
type Story = StoryObj<typeof N>;

export const Primary: Story = {
  render: () => <N />,
};
