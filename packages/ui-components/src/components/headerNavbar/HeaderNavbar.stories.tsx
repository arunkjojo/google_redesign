import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HeaderNavbar } from './HeaderNavbar'

export default {
  title: 'Components/HeaderNavbar',
  component: HeaderNavbar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof HeaderNavbar>

const Template: ComponentStory<typeof HeaderNavbar> = args => <HeaderNavbar {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Header Navbar'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Header Navbar'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Header Navbar'
}