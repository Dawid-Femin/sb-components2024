import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Banner as H } from "./Banner";

const meta: Meta<typeof H> = {
  component: H,
  title: "components/Banner",
};

export default meta;
type Story = StoryObj<typeof H>;

export const Primary: Story = {
  render: () => <H />,
};
