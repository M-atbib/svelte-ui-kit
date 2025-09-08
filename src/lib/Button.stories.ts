import type { Meta, StoryObj } from '@storybook/sveltekit';
import Button from './Button.svelte';
import ArrowRightLeft from '@lucide/svelte/icons/arrow-right-left';
import GripHorizontal from '@lucide/svelte/icons/grip-horizontal';
import Rocket from '@lucide/svelte/icons/rocket';

import { fn } from 'storybook/test';

const meta = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		variant: { control: 'radio', options: ['primary', 'ghost'] },
		icon: { control: 'boolean' }
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		label: 'Click me',
		icon: ArrowRightLeft,
		onclick: fn()
	}
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		label: 'Ghost Button',
		icon: GripHorizontal,
		onclick: fn()
	}
};

export const WithIcon: Story = {
	args: {
		variant: 'primary',
		label: 'Launch',
		icon: Rocket,
		onclick: fn()
	}
};

export const LongText: Story = {
	args: {
		variant: 'ghost',
		label: 'This is a button with longer text content',
		icon: ArrowRightLeft,
		onclick: fn()
	}
};
