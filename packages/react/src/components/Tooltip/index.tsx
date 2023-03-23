import React from 'react'
import { ComponentProps } from '../@types/generic'
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipRoot,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  children: React.ReactNode
  content: string
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, ...rest }) => (
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipPortal>
        <TooltipContent {...rest}>
          {content}
          <TooltipArrow />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
)

Tooltip.displayName = 'Tooltip'
TooltipProvider.displayName = 'TooltipProvider'

export { Tooltip, TooltipTrigger }
