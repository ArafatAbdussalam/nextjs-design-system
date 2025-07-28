import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'

import Aside from './Aside'


export interface ExtraAsideProps {
    footerText?: string,
}

type CustomComponentPropsAndArgs = React.ComponentProps<typeof Aside> & ExtraAsideProps


const meta = {
    component: Aside,
    args: {
        paragraphText: 'main paragraph',
    },
    render: ({footerText, ...args}) => (
        <Aside {...args}>
            <footer style={{backgroundColor: 'burlywood'}}>{footerText}</footer>
        </Aside>
    ),
    globals: {
        backgrounds: {value: 'burntSienna', grid: true}
    },
} satisfies Meta<CustomComponentPropsAndArgs>

export default meta

type Story = StoryObj<typeof meta>


export const StoryOne = {
    args: {
        paragraphText: 'paragraph one for story one',
        footerText: 'footer for story one',
    }
} satisfies Story

export const StoryTwo = {
    args: {
        paragraphText: 'paragraph two for story two',
        footerText: 'footer for story two'
    }
} satisfies Story
