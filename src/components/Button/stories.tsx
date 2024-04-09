import { StoryObj, Meta } from '@storybook/react'
import Button from '.'
import { AddShoppingCart } from '@styled-icons/material'
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj = {}

Default.args = {
  children: 'Buy now'
}

export const withIcon: StoryObj = {}

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}
