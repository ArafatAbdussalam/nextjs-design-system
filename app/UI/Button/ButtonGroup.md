import type { Meta, StoryObj } from '@storybook/nextjs'
import Button from './Button'

import { Primary, Secondary } from './Button.stories'


const meta = {
    title: 'Group/GroupedButton',
    component: Button,
    args: {
        label: 'grouped'
    }
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>


export const PrimaryAndSecondary = {
    render: () => (
        <>
            <Button {...Primary.args} />
            <Button {...Secondary.args} />
        </>
    )
} satisfies Story