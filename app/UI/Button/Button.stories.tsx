import type { Meta, StoryObj } from '@storybook/react'
import { action } from 'storybook/actions'

import Button from './Button'

const meta = {
    title: 'Buttons/Button',
    component: Button,
    args: {
        label: 'button'
    },
    decorators: [
        (ButtonComponent) => (
            <div style={{margin: '3em', padding: '10px', backgroundColor: 'grey'}}>
                <ButtonComponent />
            </div>
        )
    ],
} satisfies Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof meta>


export const Primary = {
    args: {
        label: 'Primary button',
        mode: 'primary'
    }
} satisfies Story


export const Secondary = {
    args: {
        label: 'Secondary button',
        mode: 'secondary'
    }
} satisfies Story


export const Small = {
    args: {
        label: 'Small button',
        size: 'small'
    }
} satisfies Story


export const Medium = {
    args: {
        label: 'Medium button',
        size: 'medium'
    }
} satisfies Story


export const Large = {
    args: {
        label: 'Large button',
        size: 'large'
    }
} satisfies Story


export const WithInteraction = {
    args: {
        label: 'click me',
        onClick: action('button is clicked')
    }
} satisfies Story