import { Meta, StoryObj } from '@storybook/react'
import Banner from '.'

export default {
  title: 'Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
} as Meta

export const Default: StoryObj = {}
