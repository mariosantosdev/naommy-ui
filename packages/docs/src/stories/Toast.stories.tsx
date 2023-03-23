import React from 'react'
import { Toast, ToastProvider, ToastProps } from '@naommy-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  args: {
    title: 'Scheduled',
    description: 'Your appointment has been scheduled for tomorrow at 10:00 AM',
  },
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
