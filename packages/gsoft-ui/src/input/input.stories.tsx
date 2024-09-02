import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './input_component';

const meta: Meta<typeof TextInput> = {
    title: 'Components/TextInput',
    component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
    args: {
        value: 'Editable Text',
        onChange: (e) => console.log('Text changed:', e.target.value),
        onEdit: () => alert('Edit clicked'),
        onDelete: () => alert('Delete clicked'),
    },
};

export const CustomClassName: Story = {
    args: {
        value: 'Custom Text',
        onChange: (e) => console.log('Text changed:', e.target.value),
        onEdit: () => alert('Edit clicked'),
        onDelete: () => alert('Delete clicked'),
        className: "bg-white border-gray-300 ",
    },
};
