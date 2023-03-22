import React from 'react'
import { ComponentProps } from '../@types/generic'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput: React.FC<TextInputProps> = ({ prefix, ...rest }) => (
  <TextInputContainer>
    {prefix ? <Prefix>{prefix}</Prefix> : null}
    <Input {...rest} />
  </TextInputContainer>
)
