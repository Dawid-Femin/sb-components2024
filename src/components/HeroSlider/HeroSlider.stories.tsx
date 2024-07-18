import type {Meta, StoryObj} from '@storybook/react';

import {HeroSlider as H} from './HeroSlider';

const meta: Meta<typeof H> = {
    component: H,
};

export default meta;
type Story = StoryObj<typeof H>;

export const Primary: Story = {};