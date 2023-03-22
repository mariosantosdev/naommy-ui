import React from 'react'
import { Box, BoxProps, Text } from '@naommyUI/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Layouts/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Content...</Text>
      </>
    ),
  },

  argTypes: {
    children: {
      control: { type: null },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
