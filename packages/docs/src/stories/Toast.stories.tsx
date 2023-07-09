import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@lcts-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,

  args: {
    duration: 5000,
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
