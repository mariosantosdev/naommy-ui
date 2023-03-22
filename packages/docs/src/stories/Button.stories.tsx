import { Button, ButtonProps } from '@naommyUI/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Google: StoryObj<ButtonProps> = {
  args: {
    variant: 'google',
    children: 'Criar conta com Google',
  },
}
