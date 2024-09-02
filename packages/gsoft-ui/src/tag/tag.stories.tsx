import type { Meta, StoryObj } from '@storybook/react';
import Tag from './tag_component';

const meta: Meta<typeof Tag> = {
    title: 'Components/Tag',
    component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
    args: {
        label: 'Example',
        onRemove: () => alert('Tag removed'),
    },
};

export const CustomClassName: Story = {
    args: {
        label: 'Custom',
        onRemove: () => alert('Tag removed'),
        className: 'bg-blue-100 border-blue-500 text-blue-700',
    },
};
