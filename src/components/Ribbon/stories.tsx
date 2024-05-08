import { Meta, StoryObj } from '@storybook/react'
import Ribbon from '.'

type PagePropsAndCustomArgs = React.ComponentProps<typeof Ribbon>

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta<PagePropsAndCustomArgs>

export const Default: StoryObj<PagePropsAndCustomArgs> = {
  render: ({ children, ...args }) => (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888'
      }}
    >
      <Ribbon {...args}>{children}</Ribbon>
    </div>
  )
}
