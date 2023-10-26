import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from './Input'

export default {
    title: 'Atom/Input',
    component: Input,
    args: {
        type: 'text',
        placeholder: 'Search for anything'
    }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => {
    const [value, setValue] = React.useState('');

    return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
}

export const Default = Template.bind({})
Default.args = {
    size: 'medium'
}

export const Small = Template.bind({})
Small.args = {
    size: 'small'
}

export const Large = Template.bind({})
Large.args = {
    size: 'large'
}