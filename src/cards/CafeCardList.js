import React from 'react'
import CafeCard from './CafeCard'

export default function CafeCardList({cards, onRatingChanges}) {
    return(
        <>
            {cards.map(card => <CafeCard key={card._id} card={card} onRatingChanges={onRatingChanges}/> )}
        </>
    )
}