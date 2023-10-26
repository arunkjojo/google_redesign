import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ServiceTray } from './ServiceTray'
export default {
  title: 'Components/ServiceTray',
  component: ServiceTray,
} as ComponentMeta<typeof ServiceTray>

const Template: ComponentStory<typeof ServiceTray> = args => <ServiceTray {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'medium'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}
