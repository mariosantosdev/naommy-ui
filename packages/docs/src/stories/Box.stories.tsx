import React from 'react'
import { Box, BoxProps } from '@naommyUI/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Layouts/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Content...</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
