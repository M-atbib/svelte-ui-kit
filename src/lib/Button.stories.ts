import type { Meta, StoryObj } from '@storybook/sveltekit';
import Button from './Button.svelte';

const meta = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		variant: { control: 'radio', options: ['primary', 'ghost'] }
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		children: () => 'Click me'
	}
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		children: null
	}
};

