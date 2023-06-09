import { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@lcts-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Box element test</Text>,
  },

  argTypes: {
    children: {
      control: { type: null },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
