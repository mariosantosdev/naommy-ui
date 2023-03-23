import React from 'react'
import { Tooltip, TooltipProps } from '@naommy-ui/react'
import { Info } from 'phosphor-react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <div
        style={{
          minWidth: '100vh',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    content: 'Information',
    children: <Info color="#fff" size={32} weight="fill" />,
    side: 'top',
  },
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
