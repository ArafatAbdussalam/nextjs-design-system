import type { Preview, Decorator } from '@storybook/nextjs'


const withDashedBorder: Decorator = (Decoration) => (
    <div style={{border: '1px dashed black', padding: '30px', margin: '30px'}}>
        <Decoration />
    </div>
)

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            layouts: 'centered',
            options: {
                darkGreen: {name: 'dark green', value: '#283618'},
                burntSienna: {name: 'burnt sienna', value: '#bc6c25'},
                strongRed: {name: 'strong red', value: '#c1121f'},
            },
        },
    },
    decorators: [withDashedBorder],
    initialGlobals: {
        backgrounds: {value: 'darkGreen'}
    },
}

export default preview