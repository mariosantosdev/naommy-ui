import { styled } from '../styles'
import * as RadixAvatar from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'
import { ComponentProps } from './@types/generic'
import React from 'react'

export const AvatarContainer = styled(RadixAvatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',

  variants: {
    size: {
      sm: {
        width: '$6',
        height: '$6',
      },
      md: {
        width: '$12',
        height: '$12',
      },
      lg: {
        width: '$16',
        height: '$16',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const AvatarImage = styled(RadixAvatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(RadixAvatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$white',

  svg: {
    width: '50%',
    height: '50%',
  },
})

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export const Avatar: React.FC<AvatarProps> = (props) => (
  <AvatarContainer>
    <AvatarImage {...props} />
    <AvatarFallback delayMs={600}>
      <User />
    </AvatarFallback>
  </AvatarContainer>
)
