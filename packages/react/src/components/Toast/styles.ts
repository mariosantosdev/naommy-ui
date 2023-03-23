import { styled, keyframes } from '../../styles'
import * as Toast from '@radix-ui/react-toast'
import { Heading } from '../Heading'
import { Text } from '../Text'

const hide = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: 'translateX(calc(100%))' },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + $8))',
  },
})

export const ToastProvider = styled(Toast.Provider, {})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '6px',
  padding: '$3 $5',
  display: 'grid',
  gridTemplateAreas: `
    'title title close'
    'description description description'
  `,
  gridTemplateColumns: 'auto max-content',
  columnGap: '$4',
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&[data-state="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-state="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Heading, {
  gridArea: 'title',
  defaultVariants: {
    size: 'sm',
  },
})

export const ToastContent = styled(Text, {
  gridArea: 'description',
  color: '$gray200',
  defaultVariants: {
    size: 'sm',
  },
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  gridArea: 'close',
  color: '$gray200',
  cursor: 'pointer',
  lineHeight: 0,

  svg: {
    width: '$4',
    height: '$4',
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: '$8',
  gap: '$3',
  margin: 0,
  listStyle: 'none',
  zIndex: 9999,
  outline: 'none',
})
