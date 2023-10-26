import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Image } from './Image'

export default {
    title: 'Atom/Image',
    component: Image,
    args: {
        shape: 'rectangle',
        src: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
        alt: 'Image'
    }
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = args => <Image {...args} />

export const Rectangle = Template.bind({})
Rectangle.args = {
    shape: 'rectangle'
}

export const Circle = Template.bind({})
Circle.args = {
    shape: 'circle'
}

export const Rounded = Template.bind({})
Rounded.args = {
    shape: 'rounded'
}