import React, { ElementRef, forwardRef } from 'react'
import { ComponentProps } from '../@types/generic'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>,TextInputProps>(({ prefix, ...rest }, ref) => (
    <TextInputContainer>
      {prefix ? <Prefix>{prefix}</Prefix> : null}
      <Input ref={ref} {...rest} />
    </TextInputContainer>
  ))

TextInput.displayName = 'TextInput'
