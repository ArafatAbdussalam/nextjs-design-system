import type { Meta, StoryObj } from '@storybook/nextjs'
import { Title, Subtitle, Description, Primary, Controls, Stories, } from '@storybook/addon-docs/blocks';

import Article from './Article'


const meta = {
    component: Article,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <Controls />
                    <Stories />
                </>
            ),
            toc: true,
        },
    },
    args: {
        text: 'default export',
        children: (
            <div>
                <h3>heading level 3</h3>
                <p>paragraph.</p>
            </div>
        ),
    },
} satisfies Meta<typeof Article>

export default meta


type Story = StoryObj<typeof meta>

export const Default = {
    args: {
        ...meta.args
    }
} satisfies Story

export const NewHeading = {
    args: {
        text: 'new story',
        children: (
            <div>
                <h3>new heading level 3</h3>
                <p>new paragraph.</p>
            </div>
        ),
    },
} satisfies Story