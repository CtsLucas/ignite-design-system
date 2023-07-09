import { ComponentProps, ReactNode } from 'react'

import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from './styles'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  children: ReactNode
  message: string
}

export function Tooltip({ children, message, ...props }: TooltipProps) {
  return (
    <TooltipContainer {...props}>
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            <Text as="span" size="sm">
              {message}
            </Text>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipContainer>
  )
}
