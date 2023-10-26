import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Label } from './Label'

export default {
    title: 'Atom/Label',
    component: Label,
    args: {
        whiteText: false,
        text: 'Label',
    }
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = args => <Label {...args} />

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

export const WhiteText = Template.bind({})
WhiteText.args = {
    whiteText: true
}

export const LighterText = Template.bind({})
LighterText.args = {
    labelWight: 'lighter'
}

export const BolderText = Template.bind({})
BolderText.args = {
    labelWight: 'bolder'
}
