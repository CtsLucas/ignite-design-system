import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Prefix, TextInputContainter } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainter>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainter>
    )
  },
)

TextInput.displayName = 'TextInput'
