import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import Aside from "./Aside";


export interface ExtraAsideProps {
    footer?: string,
}

type CustomComponentPropsAndArgs = React.ComponentProps<typeof Aside> & ExtraAsideProps


const meta = {
    component: Aside,
    args: {
        text: 'Aside component',
        children: (
            <div>
                <h3>default export</h3>
                <p>paragraph.</p>
            </div>

        )
    }
    // render: ({...args}) => (
    //     <Aside {...args}>
    //         <h1>heading text</h1>
    //         <p>children props</p>
    //     </Aside>
    // )
} satisfies Meta<typeof Aside>