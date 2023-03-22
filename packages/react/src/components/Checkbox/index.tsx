import { Check } from 'phosphor-react'
import { ComponentProps } from '../@types/generic'
import React from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export const Checkbox: React.FC<CheckboxProps> = (props) => (
  <CheckboxContainer {...props}>
    <CheckboxIndicator asChild>
      <Check weight="bold" />
    </CheckboxIndicator>
  </CheckboxContainer>
)

Checkbox.displayName = 'Checkbox'
