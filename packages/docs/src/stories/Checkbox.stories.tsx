import React from 'react'
import { Box, Text, Checkbox, CheckboxProps } from '@naommyUI/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
      >
        {Story()}
        <Text size="sm">Accept the terms of use</Text>
      </Box>
    ),
  ],
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
