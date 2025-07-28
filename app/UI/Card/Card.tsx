export interface CardProps {
    cardBackgroundColor: string
    cardOpacity?: number
    cardText: string
}

export default function Card({cardBackgroundColor, cardOpacity, cardText}: CardProps) {

    return (
        <div style={{backgroundColor: `${cardBackgroundColor}`, opacity: `${cardOpacity}`}}>
            <h3>this is a card component</h3>
            <p>{cardText}</p>
        </div>
    )
}