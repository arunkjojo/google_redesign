import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchBox } from './SearchBox'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/SearchBox',
  component: SearchBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof SearchBox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBox> = args => <SearchBox {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Search for anything'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  placeholder: 'Search for anything'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  placeholder: 'Search...'
}
