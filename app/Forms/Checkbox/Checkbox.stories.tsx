import type { Meta, StoryObj } from '@storybook/nextjs'
import { useArgs } from 'storybook/preview-api';

import Checkbox from './Checkbox'


const meta = {
    component: Checkbox,
    args: {
        label: 'item',
        isChecked: false,
    }

} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default = {
    args: {
        ...meta.args
    },
    render: function Render(args) {
        const [ {isChecked}, updateArgs ] = useArgs()

        function onChange() {
            updateArgs(
                {
                    isChecked: !isChecked
                }
            )
        }

        return (
            <Checkbox {...args} label='new item' onChange={onChange} isChecked={isChecked} />
        )
    }
} satisfies Story

export const Unchecked = {
    args: {
        label: 'unchecked item',
        isChecked: false,
    } 
}


export const Checked = {
    args: {
        label: 'checked item',
        isChecked: true,
    } 
}

