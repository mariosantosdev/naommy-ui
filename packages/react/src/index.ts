import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  backgroundColor: '$ignite500',
  color: '$white',
  borderRadius: '$sm',
  padding: '$3 $6',
  border: 0,

  variants: {
    variant: {
      primary: {},
      google: {
        backgroundColor: '#DB4437',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
