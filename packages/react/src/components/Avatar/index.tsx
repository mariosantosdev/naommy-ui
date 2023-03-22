import { User } from 'phosphor-react'
import { ComponentProps } from '../@types/generic'

import React from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export const Avatar: React.FC<AvatarProps> = (props) => (
  <AvatarContainer>
    <AvatarImage {...props} />
    <AvatarFallback delayMs={600}>
      <User />
    </AvatarFallback>
  </AvatarContainer>
)

Avatar.displayName = 'Avatar'
