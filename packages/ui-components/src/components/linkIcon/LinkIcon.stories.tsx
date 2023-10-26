import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LinkIcon } from './LinkIcon'

export default {
  title: 'Components/LinkIcon',
  component: LinkIcon,
  args: {
    whiteText: false,
    boarderColor: 'white',
    src: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    alt: 'Image',
  },
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as unknown as ComponentMeta<typeof LinkIcon>

const Template: ComponentStory<typeof LinkIcon> = args => <LinkIcon {...args} />

export const LabeledCircle = Template.bind({})
LabeledCircle.args = {
  text: 'Arun',
  shape: 'circle',
}

export const NonLabeledCircle = Template.bind({})
NonLabeledCircle.args = {
  shape: 'circle',
}

export const LabeledRounded = Template.bind({})
LabeledRounded.args = {
  shape: 'rounded',
  text: 'Arun',
}

export const Bordered = Template.bind({})
Bordered.args = {
  size: 'small',
  shape: 'circle',
  boarderColor: 'red',
}