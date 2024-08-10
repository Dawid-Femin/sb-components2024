import type { Meta, StoryObj } from "@storybook/react";

import { ImageSlider as I } from "./ImageSlider";

const meta: Meta<typeof I> = {
    component: I,
    title: "components/ImageSlider",
};

export default meta;
type Story = StoryObj<typeof I>;

export const Primary: Story = {
    render: () => <I />,
};
