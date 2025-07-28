import React  from 'react'

export interface AsideProps {
    paragraphText: string
    children?: React.ReactNode
}


export default function Aside({paragraphText, children, ...args}: AsideProps) {

    return(
        <aside style={{border: '1px solid black', padding: '20px'}}>
            <h3>aside component</h3>
            <p>{paragraphText}</p>
            {children}
        </aside>
    )
}