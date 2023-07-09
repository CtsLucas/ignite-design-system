import { ComponentProps } from 'react'
import { X } from 'phosphor-react'

import {
  ToastClose,
  ToastContainer,
  ToastContent,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastContainer {...props}>
      <ToastContent>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose>
          <X size={20} />
        </ToastClose>
      </ToastContent>

      <ToastViewport />
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
