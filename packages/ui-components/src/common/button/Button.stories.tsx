import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'
import { Image } from '../image/Image'

export default {
    title: 'Atom/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'Medium Button'
}

export const Small = Template.bind({})
Small.args = {
    children: 'Small Button'
}

export const Large = Template.bind({})
Large.args = {
    children: 'Large Button'
}

export const DefaultChild = Template.bind({})
DefaultChild.args = {
    children: <Image size='small' src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' alt='Image' />
}