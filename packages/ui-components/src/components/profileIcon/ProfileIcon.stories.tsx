import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProfileIcon } from './ProfileIcon'

export default {
  title: 'Components/ProfileIcon',
  component: ProfileIcon,
} as ComponentMeta<typeof ProfileIcon>

const Template: ComponentStory<typeof ProfileIcon> = args => <ProfileIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  src: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  alt: 'ProfileIcon'
}

export const Badged = Template.bind({})
Badged.args = {
  src: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  alt: 'ProfileIcon',
  badge: true
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  src: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  alt: 'ProfileIcon'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  src: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
  alt: 'ProfileIcon'
}
