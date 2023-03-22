import { styled, keyframes } from '../styles'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { ComponentProps } from './@types/generic'
import React from 'react'

export const CheckboxContainer = styled(RadixCheckbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus': {
    border: '2px solid $ignite300',
  },
})

const slideIn = keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0)' },
})

const slideOut = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(-100%)' },
})

export const CheckboxIndicator = styled(RadixCheckbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export const Checkbox: React.FC<CheckboxProps> = (props) => (
  <CheckboxContainer {...props}>
    <CheckboxIndicator asChild>
      <Check weight="bold" />
    </CheckboxIndicator>
  </CheckboxContainer>
)
