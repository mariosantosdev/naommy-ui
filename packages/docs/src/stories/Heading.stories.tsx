import { Heading, HeadingProps } from '@naommyUI/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Lorem ipsum',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Lorem ipsum in strong',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the `Heading` component renders an `h2` tag. You can change this by passing the `as` prop.',
      },
    },
  },
}
