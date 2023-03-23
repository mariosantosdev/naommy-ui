import * as Tooltip from '@radix-ui/react-tooltip'
import { styled, keyframes } from '../../styles'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray100',
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '5px',
  userSelect: 'none',
  animationDuration: '400ms',
  willChange: 'transform, opacity',

  textAlign: 'center',
  fontFamily: '$Inter',
  fontWeight: '$medium',
  fontSize: '$sm',

  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideRightAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideLeftAndFade },
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
