import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainter } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainter>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainter>
  )
}

TextInput.displayName = 'TextInput'
