import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$xs',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  width: '$4',
  height: '$2',
})
