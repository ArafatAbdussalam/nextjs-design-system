import  type { Meta, StoryObj } from '@storybook/nextjs'

import CardDocsTemplate from './CardDocsTemplate.mdx'

import Card from './Card'


const meta = {
    component: Card,
    tags:['autodocs'],
    parameters: {
        docs: {
            page: CardDocsTemplate,
        },
    },
    argTypes: {
        cardBackgroundColor: {
            control: {
                type: 'color',
            }
        },
        cardOpacity: {
            control: {
                type: 'range',
                min: 0,
                max: 1,
                step: 0.1,
            }
        },
        cardText: {
            control: 'text'
        }
    }
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Faded = {
    args: {
        cardBackgroundColor: '#c40cb7',
        cardOpacity: 0.5,
        cardText: 'padding values are restricted'
    }
} satisfies Story

export const Opaque = {
    args: {
        cardBackgroundColor: '#c40cb7',
        cardOpacity: 0.9,
        cardText: 'padding values are restricted'
    }
} satisfies Story