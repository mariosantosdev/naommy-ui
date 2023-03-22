import React from 'react'
import { Box, MultiStep, MultiStepProps } from '@naommyUI/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {
    steps: 3,
    currentStep: 1,
  },
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    steps: 3,
    currentStep: 3,
  },
}
