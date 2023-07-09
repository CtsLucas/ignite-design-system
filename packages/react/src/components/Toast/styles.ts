import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Provider, {})

export const ToastContent = styled(Toast.Root, {
  width: 'min(360px, 100%)',
  background: '$gray800',
  padding: '$3 $5',
  border: '1px solid $gray700',
  borderRadius: '$sm',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '$1',

  position: 'relative',
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  color: '$gray200',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  top: 16,
  right: 16,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: 'transparent',
  border: 'none',
  padding: 0,
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {})
