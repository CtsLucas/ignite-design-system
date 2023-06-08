import { StoryObj, Meta } from '@storybook/react'

import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typegraphy/Heading',
  component: Heading,

  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can use the `as` prop to change the heading tag. By default, it is `h2`.',
      },
    },
  },
}
