import { Text, TextProps } from '@naommyUI/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Lorem ipsum',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Lorem ipsum in strong',
    as: 'strong',
  },
}
