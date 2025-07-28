import React from 'react'


export interface ArticleProps  {
    text: string;
    children: React.ReactNode;
}

export default function Article({...props}: ArticleProps) {

    const {text, children} = props

    return(
        <article style={{border: '1px solid black', padding: '20px'}}>
            <h1>{text}</h1>
            {children}
        </article>
    )
}