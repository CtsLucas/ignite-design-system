import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@lcts-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    message: '26 de Outubro - Disponível',
  },

  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            height: 200,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            style={{
              width: 16,
              height: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {Story()}
          </Box>
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: <Text>26</Text>,
  },
}
